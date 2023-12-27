
const Button = (props) => {
  return (
    <div>
      <button className=" bg-[#28406D]  font-bold text-2xl my-auto mx-auto p-3 text-white capitalize">

        {props.title}
      </button>
    </div>
  );
};

export default Button;
