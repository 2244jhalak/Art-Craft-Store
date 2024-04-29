
import { updateProfile } from "firebase/auth";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { getAuth } from "firebase/auth";

const UpdateProfile = () => {
    const { user, setUser } = useContext(AuthContext);
    const auth = getAuth();
    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email, setEmail] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState(null);

    // useEffect to set initial state when user object is available
    useEffect(() => {
        if (user) {
            setDisplayName(user.displayName || "");
            setPhotoURL(user.photoURL || "");
            setEmail(user.email || "");

            
            
            
            
        }
        // localStorage.removeItem('updatedEmail');
    }, [user]);

    // Function to handle form submission and update user profile
    // Function to handle form submission and update user profile
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProfile(auth.currentUser, {
                displayName,
                email,
                photoURL
            });
            const updatedUser = {
                ...user,
                displayName,
                email,
                photoURL
            };
            setUser(updatedUser);
            console.log('Profile updated successfully');
            setIsEditing(false); // Disable editing mode after saving

            // Update local storage with new email
           
        } catch (error) {
            console.error('Error updating profile:', error.message);
            setError('Failed to update profile. Please try again.');
        }
    };


    return (
        <div className="text-center my-10">
            <h2 className="text-3xl font-bold">Update Profile</h2>
            <div className="mt-5 flex items-center justify-center border-2 lg:mx-[350px] md:mx-[200px] mx-[15px] py-5 rounded-lg border-black">
                {user && (
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                className="mb-3 font-semibold dark:text-black"
                                type="text"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                disabled={!isEditing}
                            />
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                className="mb-3 font-semibold dark:text-black"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={!isEditing}
                            />
                        </label>
                        <br />
                        <label>
                            Photo URL:
                            <input
                                className="mb-3 font-semibold dark:text-black"
                                type="text"
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                                disabled={!isEditing}
                            />
                        </label>
                        <br />
                        {error && <p className="text-red-500">{error}</p>}
                        {isEditing ? (
                            <>
                                <button className="btn btn-outline dark:text-white" type="submit">Save Changes</button>
                                
                            </>
                        ) : (
                            <button className="btn btn-outline dark:text-white" onClick={() => setIsEditing(true)}>Edit Profile</button>
                        )}
                    </form>
                )}
            </div>
        </div>
    );
};

export default UpdateProfile;

