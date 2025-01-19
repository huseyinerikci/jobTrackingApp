import moment from "moment";
import "./card.scss";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import DeleteButton from "./DeleteButton";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
const Card = ({ job }) => {
  const date =
    job.status === "Devam Ediyor"
      ? "Applied " + moment(job.date).fromNow()
      : job.status === "Reddedildi"
      ? "Rejected " +
        new Date(job.rejection_date).toLocaleDateString("en", {
          day: "2-digit",
          month: "short",
        })
      : moment(job.interview_date).format("MMMM Do  YYYY, h:mm a");
  return (
    <div className="card">
      <div className="head">
        <div>
          <h1 className="letter">
            <span>{job.company[0]}</span>
          </h1>

          <div>
            <h2 className="role">{job.position}</h2>
            <h5 className="comp">{job.company}</h5>
          </div>
        </div>

        <div className="buttons">
          <Link to={`/job/${job.id}`} className="edit">
            <MdEdit />
          </Link>
          <DeleteButton id={job.id} />
        </div>
      </div>
      <div className="line" />

      <div className="body">
        <p className="loc">
          <FaMapMarkerAlt className="icon" />
          {job.location}
        </p>

        <div className="bottom">
          <span className="date">
            <FaCalendarAlt className="icon" />
            {date}
          </span>
          <span className="type">{job.type}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
