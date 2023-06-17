import { User } from "next-auth";
import { FC } from "react";
import { Avatar, AvatarFallback } from "./ui/Avatar";
import Image from "next/image";
import { Icons } from "./Icons";
interface IUserAvatarProps {
	user: Pick<User, "name" | "image">;
}

export const UserAvatar: FC<IUserAvatarProps> = ({ user }) => {
	return (
		<Avatar>
			{user.image ? (
				<div className="relative aspect-square h-full w-full">
					<Image
						fill
						src={user.image}
						alt="pfp"
						referrerPolicy="no-referrer"
					/>
				</div>
			) : (
				<AvatarFallback>
					<span className="sr-only">{user?.name}</span>
					<Icons.user className="h-4 w-4" />
				</AvatarFallback>
			)}
		</Avatar>
	);
};
