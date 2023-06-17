"use client";

import { User } from "next-auth";
import { FC } from "react";
import { UserAvatar } from "./UserAvatar";
import { DropdownMenu, DropdownMenuTrigger } from "./ui/DropDownMenu";

interface IUserAccountNavProps {
	user: Pick<User, "name" | "image" | "email">;
}

export const UserAccountNav: FC<IUserAccountNavProps> = ({ user }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<UserAvatar user={user} />
			</DropdownMenuTrigger>
		</DropdownMenu>
	);
};
