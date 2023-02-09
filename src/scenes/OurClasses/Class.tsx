type Props = {
    name: string;
    description?: string;
    image: string;


}
const overlayStyles = `p-5 absolute z-100 flex 
h-[380px] w-[450px] flex-col items-center justify-center 
whitespace-normal bg-primary-100  
text-center text-white opacity-0 transition duration-500 hover:opacity-80 hover:bg-primary-500`;
const Class = ({name, description, image}: Props) => {
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
        <div className={overlayStyles}>
            <p className="font-bold tex-3xl">{name}</p>
            <p className="mt-5">{description}</p>          
        </div>
        <img alt={`${image}`} src={image} /> 
    </li>
  )
};

export default Class