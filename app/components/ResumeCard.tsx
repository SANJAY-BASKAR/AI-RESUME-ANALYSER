import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router";
import ScoreCircle from "~/components/ScoreCircle";
import {usePuterStore} from "~/lib/puter";

const ResumeCard = ({ resume: { id, companyName, jobTitle, feedback, imagePath } }: { resume: Resume }) => {
    const [resumeUrl, setResumeUrl] = useState("");
    const { auth, fs } = usePuterStore();
    // trick to sign in user properly with next parameter
    // use effect and functions are here for just authenticating redirection

    const navigate = useNavigate();


    useEffect(() => {
        const loadResume = async  () => {
            const blob = await fs.read(imagePath);
            if (!blob) return;

            let url = URL.createObjectURL(blob);
            setResumeUrl(url);
        }
        loadResume();

    }, [imagePath]);

    return (
        <Link to={`/resume.${id}`} className="resume-card animate-in fade-in duration-1000">
            <div className="resume-card-header">
                <div className="flex flex-col gap-2">
                    {companyName &&<h2 className="!text-black font-bold break-words">
                        {companyName}
                    </h2>}
                    {jobTitle && <h3 className="text-lg break-words text-gray-500">
                        {jobTitle}
                    </h3>}
                    {!companyName && !jobTitle && (
                        <div className="text-black font-bold">Resume</div>
                    )}
                </div>
                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>
            {resumeUrl && <div className="gradient-border animate-in fade-in duration-1000">
                    <div className="w-full h-full">
                        <img
                            src={imagePath}
                            alt="resume"
                            className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
                        />
                    </div>
            </div>}


        </Link>
    )
}
export default ResumeCard
