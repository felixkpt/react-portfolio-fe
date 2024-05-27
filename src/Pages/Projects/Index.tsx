import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxios from "@/hooks/useAxios";
import Loader from "@/components/Loader";
import usePermissions from "@/hooks/rba/usePermissions";
import NoContentMessage from "@/components/NoContentMessage";
import ProjectsCard from "./ProjectCard";
import ResumeDownloadForm from "../Home/ResumeDownloadForm";
import Header from "../../components/Header";

const Index = () => {
    const { get, loading, loaded, errors } = useAxios();
    const { userCan } = usePermissions();

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await get('projects');
            if (response && response.results) {
                setData(response.results.data);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="">
            {userCan('projects', 'post') && (
                <div className="d-flex justify-content-end">
                    <Link className="btn btn-primary" to="/projects/create">Create</Link>
                </div>
            )}
            <div>
                {loaded && !errors ? (
                    <div className="pf-projects row mt-3 justify-content-between">
                        <Header title="Projects" />
                        {data.length ? (
                            data.map((item) => <ProjectsCard key={item.id} item={item} />)
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
