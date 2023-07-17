import DisplayCenter from "../../components/DisplayCenter/DisplayCenter";
import LogIn from "./LogIn";
import Registration from "./Registration";

const LogInRegistration = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <DisplayCenter>
        <LogIn />
      </DisplayCenter>
      {/* <div className="divider divider-horizontal lg:visible hidden">OR</div> */}
      <DisplayCenter>
        <Registration />
      </DisplayCenter>
    </div>
  );
};

export default LogInRegistration;
