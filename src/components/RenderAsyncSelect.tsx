import { GetOptionValue, GroupBase, OptionsOrGroups, PropsValue } from 'react-select';
import AsyncSelect from 'react-select/async';

import Str from '@/utils/Str';
import { useState } from "react";
import { ListSourceInterface } from '@/interfaces/UncategorizedInterfaces';
import { reactSelectStyles } from '@/utils/styles';

interface RenderAsyncSelectProps {
    current_key: string;
    currentData: any;
    isMulti?: boolean;
    listSources?: { [key: string]: () => Promise<ListSourceInterface[]> };
    listSelects?: { [key: string]: any };
}

type OptionsType = void | Promise<OptionsOrGroups<object, GroupBase<object>>>

let _listSources: any

const RenderAsyncSelect = ({ listSources, listSelects, current_key, currentData, isMulti = false }: RenderAsyncSelectProps) => {

    const [selected, setSelected] = useState<PropsValue<object> | undefined>();

    if (listSources)
        _listSources = listSources

    async function getOptions(current_key: string, rawSelected: PropsValue<object> | PropsValue<object[]> | undefined, q?: string) {

        if (!_listSources) return {};

        const fn = Str.camel(current_key);

        // Type assertion to specify that listSources[fn] is a function returning Promise<any>
        const listSourceFn = _listSources[fn] as ((q?: string) => Promise<unknown>);

        if (typeof listSourceFn === 'function') {
            const options = await listSourceFn(q);

            let selected = rawSelected;

            if (listSelects?.[fn]) {
                selected = listSelects[fn]
            }
            else if (Array.isArray(rawSelected)) {
                selected = options.filter((option: any) => rawSelected.some((selectedItem: any) => String(selectedItem.id) === String(option.id)));
            } else if (typeof rawSelected === 'number' || typeof rawSelected === 'string') {

                selected = options.find((option: any) => String(option.id) === String(rawSelected) || String(option.name) === String(rawSelected));
            }


            return { options, selected: selected };

        } else {
            const err = `Function '${fn}' not found in listSources.`
            console.log(err)
            throw new Error(err);
        }
    }


    async function loadOptions(query: string): Promise<unknown> {

        if (current_key) {
            let currentValue;
            if (typeof currentData === 'number') {
                currentValue = currentData

            } else {
                currentValue = currentData || (isMulti ? [] : '')
            }

            const { options: fetchedOptions } = await getOptions(current_key, currentValue, query);

            if (!selected) {
                setSelected(currentValue);
            }

            return fetchedOptions
        }
    }

    return (
        <AsyncSelect
            id={current_key}
            className="form-control"
            name={
                isMulti && Array.isArray(selected) && selected.length > 0
                    ? `${current_key}[]`
                    : current_key
            }
            key={current_key}
            value={selected}
            isMulti={isMulti}
            defaultOptions
            loadOptions={(q: string) => loadOptions(q) as unknown as OptionsType}
            onChange={(val) => setSelected(val)}
            getOptionValue={(option: any) => `${option['id']}`}
            getOptionLabel={(option: any) => `${option['name']}`}
            cacheOptions
            styles={reactSelectStyles}
        />
    );
};

export default RenderAsyncSelect