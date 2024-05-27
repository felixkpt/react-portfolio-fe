import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxios from "@/hooks/useAxios";
import Loader from "@/components/Loader";
import usePermissions from "@/hooks/rba/usePermissions";
import CompanyCard from "./CompanyCard";
import NoContentMessage from "@/components/NoContentMessage";
import ResumeDownloadForm from "../Home/ResumeDownloadForm";
import Header from "../../components/Header";

const Index = () => {
    const { get, loading, loaded, errors } = useAxios();
    const { userCan } = usePermissions();

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await get('companies?status=1');
            if (response && response.results) {
                setData(response.results.data);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            {userCan('companies', 'post') &&
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary" to="/companies/create">Create</Link>
                </div>
            }
            <div>
                {loaded && !errors ? (
                    <div className="pf-companies row mt-3 justify-content-between">
                        <Header title="Work experience" />
                        {data.length ? (
                            data.map((item) => <CompanyCard key={item.id} item={item} />)
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
