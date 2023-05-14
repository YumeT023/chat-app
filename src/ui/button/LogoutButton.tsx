import {Button} from "@/src/ui/button/index";

export type LogoutButtonProps = {
  logout(): void;
};

// TODO: maybe consider using BoxedIcon ?
export const LogoutButton = ({logout}: LogoutButtonProps) => {
  return <Button onClick={logout}>Logout</Button>;
};
