import { ContactInfo } from "@/types/types"

interface Props {
    contact: ContactInfo;
}

export default function Profile({ contact }: Props) {
    const { email, phone, github, linkedin, location } = contact;
    return (
        <div>
            <div>
                {/* Image */}
            </div>
            <div>
                <h1>Chase Little</h1>
                <h1>{email}</h1>
                <h1>{linkedin}</h1>
            </div>
            
        </div>
    )
}