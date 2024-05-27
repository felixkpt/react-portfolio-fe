import './qualifications.scss';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxios from "@/hooks/useAxios";
import Loader from "@/components/Loader";
import usePermissions from "@/hooks/rba/usePermissions";
import NoContentMessage from "@/components/NoContentMessage";
import QualificationCard from "./QualificationCard";
import ResumeDownloadForm from '../Home/ResumeDownloadForm';
import Header from '../../components/Header';

const Index = () => {
    const { get, loading, loaded, errors } = useAxios();
    const { userCan } = usePermissions();

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await get('qualifications');
            if (response && response.results) {
                setData(response.results.data);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="">
            {userCan('qualifications', 'post') && (
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary" to="/qualifications/create">Create</Link>
                </div>
            )}
            <div>
                {loaded && !errors ? (
                    <div className="pf-qualifications row mt-3 justify-content-between">
                        <Header title="Qualifications" />
                        {data.length ? (
                            <ul className="timeline">
                                {data.map((item) => <QualificationCard key={item.id} item={item} />)}
                            </ul>
                        ) : (
                            <NoContentMessage />
                        )}
                    </div>
                ) : (
                    <>
                        {loading ? <Loader /> : <NoContentMessage message={errors} />}
                    </>
                )}
            </div>
            <ResumeDownloadForm />
        </div>
    );
};

export default Index;
