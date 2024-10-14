import { useForm } from "@inertiajs/react";

import { useAuth } from "@/hooks/use-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useDialog } from "@/hooks/use-dialog";
import { FormDialog } from "@/components/form-dialog";
import { ProfileEditForm } from "@/components/profile-edit-form";
import { PasswordChangeForm } from "@/components/password-change-form";

export function MainHeader() {
    const { user } = useAuth();

    const editProfileDialog = useDialog();
    const changePasswordDialog = useDialog();
    const logoutForm = useForm();

    return (
        <>
            <header>
                <Card>
                    <div className="container">
                        <CardHeader>
                            <div className="flex justify-between items-center">
                                <div></div>

                                <DropdownMenu>
                                    <DropdownMenuTrigger disabled={logoutForm.processing} asChild>
                                        <button
                                            type="button"
                                            className="rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                                        >
                                            <Avatar>
                                                <AvatarImage />
                                                <AvatarFallback className="capitalize">{user.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                        </button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent>
                                        <DropdownMenuItem onClick={editProfileDialog.show}>
                                            Edit Profile
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={changePasswordDialog.show}>
                                            Change Password
                                        </DropdownMenuItem>
                                        <DropdownMenuItem onClick={() => logoutForm.post("/logout")}>
                                            Log out
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </CardHeader>
                    </div>
                </Card>
            </header>

            <FormDialog
                title="Edit Profile"
                description="Edit your profile."
                dialog={editProfileDialog}
            >
                <ProfileEditForm dialog={editProfileDialog} />
            </FormDialog>

            <FormDialog
                title="Change Password"
                description="Change your password."
                dialog={changePasswordDialog}
            >
                <PasswordChangeForm dialog={changePasswordDialog} />
            </FormDialog>
        </>
    );
}
