import React, { useState } from "react";
import { useAuth } from "../../context/userContext";
import toast from "react-hot-toast";

const RoleSwitch = () => {
  const { currentUser, setCurrentUser } = useAuth();
  const [newRole, setNewRole] = useState<string>(currentUser?.role || "");

  const handleRoleChange = async () => {
    if (!currentUser) {
      toast.error("You need to be logged in to change roles");
      return;
    }
    try {
      const response = await fetch("/api/drivers/updateDriver", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: currentUser._id,
          role: newRole,
        }),
      });
      const data = await response.json();
      setCurrentUser(data);
      toast.success("Role updated successfully");
    } catch (error) {}
  };
  return (
    <div>
      <h1>Switch Role</h1>
      <select value={newRole} onChange={(e) => setNewRole(e.target.value)}>
        <option value="user">User</option>
        <option value="driver">Driver</option>
      </select>
      <button onClick={handleRoleChange}>Update Role</button>
    </div>
  );
};

export default RoleSwitch;
