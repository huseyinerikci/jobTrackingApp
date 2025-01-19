import { useSelector } from "react-redux";
import Loader from "../../components/loader";
import Error from "../../components/error";
import Card from "../../components/card";
import "./home.scss";

const Home = () => {
  const { jobs, isLoading, error } = useSelector((store) => store.jobReducer);

  //dizi içinden birden fazla dizi oluturmak, grup dizileri
  const grouped = jobs.reduce((acc, job) => {
    if (!acc[job.status]) {
      acc[job.status] = [];
    }

    acc[job.status].push(job);
    return acc;
  }, {});

  return (
    <div className="home-page">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} />
      ) : (
        <div className="layout">
          {
            //nesnenin içindeki tüm verileri yani dizi gruplarını ekrana basma
            Object.keys(grouped).map((status) => (
              <div key={status} className="group">
                <h1 className="title">
                  {status} ({grouped[status].length})
                </h1>

                <div className="list">
                  {grouped[status].map((job) => (
                    <Card key={job.id} job={job} />
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
};

export default Home;
