import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, }
    from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger, }
    from "@/components/ui/tabs"
import { useState } from "react"
import supabase from '@/utils/supabase';
import { useNavigate } from "@tanstack/react-router";

export default function () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const navigate = useNavigate();

    const handleSingUp = async () => {

        const { error } = await supabase.auth.signUp({email,password});
        if (error) {
            console.log(`Registration failed: ${error.message}`);
        } else {
            alert('Check your email for the login link!');
        }

        const { } = await supabase.from("register").insert([
            {
                name,
                email,
                password
            }
        ])
    }

    const handleSignIn = async () => {

        let {error} = await supabase.auth.signInWithPassword({
            email: loginEmail,
            password: loginPassword,
        })
        if (error){
            console.log(`login error ${error}`);
        }else{
            navigate({to:'/main'});
            alert('Login Successfully...');
        }

        // const {data:{session}} = await supabase.auth.getSession();
        // console.log(session);
    }

    return (
        <Tabs defaultValue="signUp" className="w-[450px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signUp">Sign-Up</TabsTrigger>
                <TabsTrigger value="signIn">Sign-In</TabsTrigger>
            </TabsList>
            <TabsContent value="signUp">
                <Card>
                    <CardHeader>
                        <CardTitle>Sign-Up-Page</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label>Name</Label>
                            <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="space-y-1">
                            <Label>Email</Label>
                            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="space-y-1">
                            <Label>Password</Label>
                            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleSingUp} >Sing-up</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
            <TabsContent value="signIn">
                <Card>
                    <CardHeader>
                        <CardTitle>Sign-In-Page</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label>Email</Label>
                            <Input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                        </div>
                        <div className="space-y-1">
                            <Label>Password</Label>
                            <Input value={loginPassword} type="password" onChange={(e) => setLoginPassword(e.target.value)} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleSignIn} >Sign-in</Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}
