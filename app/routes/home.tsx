  import type { Route } from "./+types/home";
  import Navbar from "~/components/Navbar";
  import ResumeCard from "~/components/ResumeCard";
  import {usePuterStore} from "~/lib/puter";
  import {useNavigate} from "react-router";
  import {useEffect, useState} from "react";
  export function meta({}: Route.MetaArgs) {
    return [
      { title: "Resumind" },
      { name: "description", content: "Smart feedback for dream job" },
    ];
  }

  export default function Home() {
    const { auth, kv } = usePuterStore();
    // trick to sign in user properly with next parameter
    // use effect and functions are here for just authenticating redirection
    const [resumes, setResumes] = useState<Resume[]>([]);
    const [loadingResumes, setLoadingResumes] = useState('false');
    const navigate = useNavigate();



      useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
      }, [auth.isAuthenticated])

    useEffect(() => {
      const loadResumes = async () => {
        setLoadingResumes(true);

        const resumes = (await kv.list('resume:*', true)) as KVItem[];

        const parsedResumes = resumes?.map((resume) => (
            JSON.parse(resume.value) as Resume
        ))

        console.log(parsedResumes || []);

        setResumes(parsedResumes || []);
        setLoadingResumes(false);
      }

      loadResumes()
    }, []);



    return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track your Application & resume ratings</h1>
          <h2>Review your submissions and get AI powered feedbacks.</h2>
        </div>

        {!loadingResumes && resumes.length > 0 && (
            <div className="resumes-section">
              {resumes.map((resume) => (
                  <ResumeCard key={resume.id} resume={resume}/>
              ))}
            </div>
        )}
      </section>
    </main>;
  }
