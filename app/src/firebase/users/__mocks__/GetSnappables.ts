import { Snappable } from "../../../types";

export default async function GetSnappables(): Promise<Snappable[]> {
    return [
        {
            id: "1",
            email: "hello@example.com",
            fullName: "Bob bobson",
            username: "bb123",
        },
    ];
}
