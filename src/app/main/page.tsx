import NavigationMenu from "@/app/components/NavigationMenu";
import ActiveLink from "@/app/components/ActiveLink";
export default function Main() {
  return (
    <>
      <div className="flex">
        <ActiveLink children="test" href="./main/dashboard"/>
        <div></div>
      </div>
    </>
  );
}
