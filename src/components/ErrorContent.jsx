import errorIcon from "../assets/browser.svg";

export const ErrorContent = ({err}) => {
  return (
    <>
      <p className="text-gray-400 text-sm pb-2 italic">{err.msg}</p>
      <img src={errorIcon} className={''} alt="error icon"/>
    </>
  )
}