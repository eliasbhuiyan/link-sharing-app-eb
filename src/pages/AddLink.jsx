import { useState } from "react";
import MobilePreview from "../components/MobilePreview";
import { FaPlus } from "react-icons/fa6";
import LinkCard from "../components/LinkCard";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { loggedUser } from "../reduce/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const AddLink = () => {
  const linkList = useSelector((state) => state.isLoggedUser.user.links);
  const [fields, setFields] = useState([...linkList]);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  // Handle input field changes (both url and select)
  const handleInputChange = (index, event) => {
    setIsActive(true);
    const { name, value } = event.target;
    setFields((prevFields) => {
      const newFields = [...prevFields];
      newFields[index] = {
        ...newFields[index],
        [name]: value,
      };
      return newFields;
    });
  };

  // Add a new field
  const addField = () => {
    setFields([...fields, { url: "", option: "" }]);
    setIsActive(true);
  };

  // Handle remove a field
  const removeField = (data) => {
    setIsActive(true);
    const newFields = fields.filter((_, i) => i !== data.index);
    setFields(newFields);
  };

  // Handle drag end
  const handleOnDragEnd = (result) => {
    if (!result.destination) return; // If dropped outside a droppable area
    const newFields = Array.from(fields);
    const [reorderedItem] = newFields.splice(result.source.index, 1);
    newFields.splice(result.destination.index, 0, reorderedItem);

    setFields(newFields);
    setIsActive(true);
  };

  const handelSaveLink = () => {
    setLoadingBtn(true);
    axios
      .post(
        `${import.meta.env.VITE_API_LINK}link/addlink`,
        { fields },
        {
          headers: {
            Authorization: `${document.cookie.match(/sec_token=([^;]+)/)?.[1]}`,
          },
        }
      )
      .then((res) => {
        dispatch(loggedUser(res.data.userData[0]));
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
        setLoadingBtn(false);
        setIsActive(false);
      })
      .catch((err) => {
        toast.error(err.response?.data.error, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
        setLoadingBtn(false);
      });
  };

  return (
    <section className="flex gap-6 mt-6 relative">
      <ToastContainer />
      <MobilePreview />
      <div className="w-full md:w-1/2 h-full bg-white rounded-xl py-10 px-8 flex flex-col">
        <h1 className="text-3xl font-bold text-primary font-sans">
          Customize your links
        </h1>
        <p className="text-secondary font-sans pt-6 pb-11">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <button
          onClick={addField}
          className="w-full flex items-center justify-center gap-3 py-2 rounded-lg text-brand border border-brand font-sans font-bold hover:bg-brand hover:text-white transition-all"
        >
          <FaPlus />
          <span>Add new link</span>
        </button>

        {/* Drag and Drop context */}
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="links">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {fields.map((field, index) => (
                  <Draggable
                    key={field._id || index}
                    draggableId={String(index)}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <LinkCard
                          index={index}
                          field={field}
                          handelInputChange={handleInputChange}
                          handelRemove={removeField}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <div className="flex justify-end border-t mt-6">
          <button
            onClick={handelSaveLink}
            disabled={loadingBtn || !isActive}
            className={`mt-5 rounded-md ${
              isActive ? "bg-brand" : "bg-secondary"
            }  px-6 py-4 text-xl font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          >
            {loadingBtn ? (
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 border-2 border-white rounded-full animate-spin"></div>
              </div>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddLink;
