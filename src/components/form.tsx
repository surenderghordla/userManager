import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import supabase from "@/utils/supabase";
import { useState } from "react";

export default function AddStudentDialog() {
  const [studentName, setStudentName] = useState("");
  const [cohort, setCohort] = useState("");
  const [courses, setCourses] = useState("");
  const [dateJoined, setDateJoined] = useState("");
  const [lastLogin, setLastLogin] = useState("");
  const [status, setStatus] = useState(false);

  const handleInsert = async () => {
    try {
      const { error } = await supabase.from("tableData").insert([
        {
          studentName: studentName,
          cohort: cohort,
          courses: courses,
          dateJoined: dateJoined,
          lastLogin: lastLogin,
          status: status,
        },
      ]);

      if (error) {
        console.error("Error inserting data:", error);
      } else {
        alert("Data inserted successfully...");
        location.reload();
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="bg-[rgb(230,235,240)] px-2">
        + Add new Student
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Student</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-5">
          <Label>Student Name</Label>
          <Input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />

          <Label>Cohort</Label>
          <Input type="text" value={cohort} onChange={(e) => setCohort(e.target.value)} />

          <Label>Courses</Label>
          <Input type="text" value={courses} onChange={(e) => setCourses(e.target.value)} />

          <Label>Date Joined</Label>
          <Input type="date" value={dateJoined} onChange={(e) => setDateJoined(e.target.value)} />

          <Label>Last Login</Label>
          <Input type="datetime-local" value={lastLogin} onChange={(e) => setLastLogin(e.target.value)} />

          <div className="grid gap-3">
            <Label>Status</Label>
            <Checkbox checked={status} onCheckedChange={(checked) => setStatus(!!checked)} />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleInsert} variant="outline" type="submit">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
