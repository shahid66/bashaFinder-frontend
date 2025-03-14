import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateUserRole } from "@/services/admin";
import { useState } from "react";
import { toast } from "sonner";

const ActionStatus = ({ row }: { row: any }) => {
  const [open, setOpen] = useState(false); // Modal state
  const [role, setRole] = useState(row.original.role); // Status state

  const handleStatusChange = async (newStatus: string) => {
    setRole(newStatus);

    try {
      const res = await updateUserRole({ role: newStatus }, row.original._id);
      if (res.success) {
        toast.success(res.message);
        setOpen(false); // Close modal after success
      } else {
        toast.error(res.message);
      }
    } catch (err: any) {
      console.error(err?.message);
      toast.error("Failed to update status.");
    }
  };

  return (
    <div className="flex items-center space-x-3">
      {/* Modal Trigger */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Manage</Button>
        </DialogTrigger>

        {/* Modal Content */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manage User Role</DialogTitle>
          </DialogHeader>

          {/* Status Dropdown */}
          <Select onValueChange={handleStatusChange} defaultValue={role}>
            <SelectTrigger className="w-full border">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tenant">Tenant</SelectItem>
              <SelectItem value="landLord">LandLord</SelectItem>
            </SelectContent>
          </Select>

          {/* Close Button */}
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ActionStatus;
