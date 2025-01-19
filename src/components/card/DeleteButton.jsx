import React from "react";
import { FaTrash } from "react-icons/fa";
import api from "../../utils/api";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteJob } from "../../redux/slices/jobSlice";

const DeleteButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (!confirm("Silmek istediğinizden emin misiniz?")) return;

    api
      .delete(`/jobs/${id}`)
      .then(() => {
        dispatch(deleteJob(id));
        toast.success("Başvuru listeden kaldırıldı");
      })
      .catch((err) => {
        toast.error("Başvuru listeden kaldırılırken bir hata oluştu");
      });
  };
  return (
    <button className="delete" onClick={handleDelete}>
      <FaTrash />
    </button>
  );
};

export default DeleteButton;
