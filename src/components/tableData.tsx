import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { useEffect, useState } from "react"
import supabase from '@/utils/supabase';
import Form from "./form";
import Course from "./coursesList";

export default function () {
    const [data, setData] = useState<any[] | undefined>([]);
    const [cohort, setCohort] = useState("AllCohort");
    const [course, setCourse] = useState("AllCourse");
 

    async function loadData() {
        let data = await supabase.from('tableData').select('*');
        let newData = data.data?.map(item => ({...item,courses:item.courses.split(",")}));
        setData(newData);
    }

    function handleCohort(value) {
        setCohort(value);
    }

    function handleCourse(value){
        setCourse(value);
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div className="tableData">
            <div className="options">
                <div className="selectGroup">
                    <Select onValueChange={handleCohort} value={cohort}>
                        <SelectTrigger className="w-[180px] bg-[rgb(230,235,240)]">
                            <SelectValue placeholder="cohort" />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem value="AllCohort">All</SelectItem>
                            <SelectItem value="Dec-22">Dec-22</SelectItem>
                            <SelectItem value="Jun-23">Jun-23</SelectItem>
                            <SelectItem value="Dec-24">Dec-24</SelectItem>
                            <SelectItem value="Nov-22">Nov-22</SelectItem>
                            <SelectItem value="Dec-23">Dec-23</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select onValueChange={handleCourse} value={course}>
                        <SelectTrigger className="w-[180px] bg-[rgb(230,235,240)]">
                            <SelectValue placeholder="CBSE 9" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="AllCourse">All</SelectItem>
                            <SelectItem value="Java-Script">Java-Script</SelectItem>
                            <SelectItem value="Python">Python</SelectItem>
                            <SelectItem value="Css">Css</SelectItem>
                            <SelectItem value="Rest">Rest</SelectItem>
                            <SelectItem value="Html">Html</SelectItem>
                            <SelectItem value="Sql">Sql</SelectItem>
                            <SelectItem value="R">R</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Form ></Form>
            </div>

            <Table>
                <TableHeader>
                    <TableRow >
                        <TableHead className="text-black-0">Student Name</TableHead>
                        <TableHead className="text-black-0">Cohort</TableHead>
                        <TableHead className="text-black-0">Courses</TableHead>
                        <TableHead className="text-black-0">Date joined</TableHead>
                        <TableHead className="text-black-0">Last login</TableHead>
                        <TableHead className="text-black-0">Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        data?.filter(item => item.cohort == cohort || cohort == "AllCohort")
                        .filter(item => item.courses.includes(course) || course == "AllCourse")
                        .map((user) => {
                            return (
                                <TableRow key={user.id}>
                                    <TableCell>{user.studentName}</TableCell>
                                    <TableCell>{user.cohort}</TableCell>
                                    <TableCell><Course list={user.courses}></Course></TableCell>
                                    <TableCell>{user.dateJoined}</TableCell>
                                    <TableCell>{user.lastLogin}</TableCell>
                                    <TableCell><div className={"circle " + (user.status ? '' : 'circle-red')}></div></TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}