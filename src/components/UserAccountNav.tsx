"use client";

import { User } from "next-auth";
import { FC } from "react";
import { UserAvatar } from "./UserAvatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "./ui/DropDownMenu";

interface IUserAccountNavProps {
	user: Pick<User, "name" | "image" | "email">;
}

export const UserAccountNav: FC<IUserAccountNavProps> = ({ user }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<UserAvatar
					className="h-8 w-8"
					user={{
						name: user.name || null,
						image: user.image || null,
					}}
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="bg-white"
				align="end"
			>
				<div className="flex items-center justify-start gap-2 p-2">
					<div className="flex flex-col space-y-1 leading-none">
						{user.name && <p className="font-medium">{user.name}</p>}
						{user.email && (
							<p className="w-[200px] truncate text-sm text-muted-foreground">
								{user.email}
							</p>
						)}
					</div>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};
