"use client";

import { useState } from "react";
import { MyInput } from "./Input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginCard() {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="flex justify-center">
      <Card className="w-[500px] ">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center flex-col gap-5">
          <MyInput.UserName value={userName} onChange={setUserName} />
          <MyInput.Password value={password} onChange={setPassword} />
        </CardContent>
      </Card>
    </div>
  );
}
