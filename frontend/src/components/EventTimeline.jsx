import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";

 function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography  sx={{ fontSize: "15px", color: "cyan", fontWeight: "bold" }}>
           India’s Premier Finance Quiz – Powered by Zerodha Varsity
          </Typography>
          <Typography  sx={{ fontSize: "10px", color: "white", fontWeight: "bold" }}>2024-25
Successfully hosted in collaboration with Zerodha Varsity</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot sx={{ bgcolor: "cyan" }}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography  sx={{ fontSize: "15px", color: "cyan", fontWeight: "bold" }}>
           Bizz Quest
          </Typography>
          <Typography  sx={{ fontSize: "10px", color: "white", fontWeight: "bold" }}>2024-25
An entry-level business quiz designed to assess and enhance participants' understanding of the business world through exciting competition and rewarding prizes.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{ bgcolor: "primary" }}>
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography  sx={{ fontSize: "15px", color: "white", fontWeight: "bold" }}>
           Marketing Mania
          </Typography>
          <Typography sx={{ fontSize: "10px", color: "cyan", fontWeight: "bold" }}>2024-25
This competition develops critical thinking, creativity, and marketing skills. By simulating real-world scenarios, it fosters entrepreneurship and strategic decision-making.</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot sx={{ bgcolor: "secondary" }}>
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography  sx={{ fontSize: "15px", color: "white", fontWeight: "bold" }}>
           TechQuest Frenzy
          </Typography>
          <Typography sx={{ fontSize: "10px", color: "cyan", fontWeight: "bold" }}>Participants tested engineering and innovation knowledge through technical questions and puzzle-solving challenges, including 'Technical Meme Mania' and rapid-fire rounds.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
 function BasicTimeline() {
  const events = [
    {
      title: "Smart India Hackathon 2025",
      year: "2025 - 2026",
      description:
        "Internal hackathon for selecting teams for the national Smart India Hackathon. Aimed at solving real-world challenges with innovation."
    },
    {
      title: "India’s Premier Finance Quiz – Powered by Zerodha Varsity",
      year: "2024 - 2025",
      description:
        "Successfully hosted in collaboration with Zerodha Varsity, this quiz challenged students on finance, economics, and entrepreneurship with enthusiastic participation across the campus."
    },
    {
      title: "Bizz Quest",
      year: "2024 - 2025",
      description:
        "An entry-level business quiz designed to assess and enhance participants' understanding of the business world through exciting competition and rewarding prizes."
    },
    {
      title: "Marketing Mania",
      year: "2024 - 2025",
      description:
        "This competition develops critical thinking, creativity, and marketing skills. By simulating real-world scenarios, it fosters entrepreneurship and strategic decision-making."
    },
    {
      title: "TechQuest Frenzy",
      year: "2024 - 2025",
      description:
        "Participants tested engineering and innovation knowledge through technical questions and puzzle-solving challenges, including 'Technical Meme Mania' and rapid-fire rounds."
    },
    {
      title: "Stocks Mania",
      year: "2024 - 2025",
      description:
        "Hosted with StockGro, this online trading simulation gave participants a chance to learn, practice, and compete in a virtual stock market."
    },
    {
      title: "TEDxNITAndhraPradesh",
      year: "2024 - 2025",
      description:
        "The TEDx experience offered a platform where students, faculty, and industry leaders could explore groundbreaking ideas, innovations, and transformative insights."
    },
    {
      title: "Pitch-o-Perfect",
      year: "2024 - 2025",
      description:
        "A pitching competition aligned with Eureka! 2024 to help early-stage startups gain exposure, mentorship, and fast-tracked entry to zonal rounds."
    },
    
  ];

  return (
    <Timeline position="alternate">
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: "cyan" }} />
            {index !== events.length - 1 && (
              <TimelineConnector sx={{ bgcolor: "blue" }} />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1" sx={{ fontWeight: "bold",}}>
              {event.title}
            </Typography>
            <Typography variant="subtitle2" color="cyan">
              {event.year}
            </Typography>
            <Typography variant="body2">{event.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
function BasicTimeline2() {
  const events = [
    {
      title: "Personal Finance Webinar",
      year: "2023 - 2024",
      description:
        "Hosted with ZERODHA, featuring Salman Quraishi, this session offered insights into personal finance, savings, and investments."
    },
    {
      title: "Advanced Marketing Webinar",
      year: "2023 - 2024",
      description:
        "Led by Dr. Abhishek Borah, this session explored the use of text mining and sentiment analysis in modern marketing strategies."
    },
    {
      title: "Ideathon 24",
      year: "2023 - 2024",
      description:
        "A two-day innovation event where students pitched ideas to expert panels and were evaluated on novelty, feasibility, and impact."
    },
    {
      title: "Career Insights Webinar",
      year: "2023 - 2024",
      description:
        "Co-hosted with Coding Ninjas, offering insights and career advice for aspiring software engineers."
    },
    {
      title: "Personality Development Workshop",
      year: "2023 - 2024",
      description:
        "Dr. Suresh Naik discussed ancient Indian science and the modern relevance of spiritual wisdom for personal growth and well-being."
    },
    {
      title: "Arcade",
      year: "2023 - 2024",
      description:
        "A relaxed, fun-filled event with RC cars, puzzles, dominoes, and Jenga for creative engagement and mental refreshment."
    },
    {
      title: "StartUp Expo 2.0",
      year: "2023 - 2024",
      description:
        "A platform for startups to present ideas, network with mentors, and inspire future entrepreneurs in a one-day exhibition."
    },
    {
      title: "Bluffs and Bargains",
      year: "2023 - 2024",
      description:
        "A strategic negotiation challenge that encouraged persuasion skills, communication, and decision-making under pressure."
    },
    {
      title: "Sensory Fusion",
      year: "2023 - 2024",
      description:
        "Hands-on Arduino workshop on building interactive projects using sensors and programming logic."
    },
    {
      title: "Smart India Hackathon 2023",
      year: "2023 - 2024",
      description:
        "Internal selection round to prepare students for SIH 2023, focused on real-world innovation and technology-driven problem-solving."
    }
  ];

  return (
    <Timeline position="alternate">
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot sx={{ bgcolor: "cyan" }} />
            {index !== events.length - 1 && (
              <TimelineConnector sx={{ bgcolor: "blue" }} />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1" sx={{ fontWeight: "bold" }}>
              {event.title}
            </Typography>
            <Typography variant="subtitle2" color="cyan">
              {event.year}
            </Typography>
            <Typography variant="body2">{event.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
function BasicTimeline3() {
  const events = [
    {
      num: "18",
      title: "I&E Cell Establishment",
      year: "2018",
      desc: "Official establishment with the vision to create a thriving startup ecosystem.",
    },
    {
      num: "19",
      title: "First Workshop",
      year: "2019",
      desc: "Launched educational programs introducing students to design and marketing thinking and entrepreneurship.",
    },
    {
      num: "22",
      title: "Industry Partnerships",
      year: "2022",
      desc: "Started collaborations with industry leaders to provide mentorship and resources for student startups.",
    },
    {
      num: "24",
      title: "First Ideathon",
      year: "2024",
      desc: "Organized our first ideathon, bringing together students to brainstorm and develop innovative solutions.",
    },
    {
      num: "25",
      title: "Incubation Centre",
      year: "2025",
      desc: "Established an incubation centre to support startups with resources, mentorship, and more opportunities.",
    },
  ];

  return (
    <Timeline position="alternate">
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            {/* Connector above except for first */}
            {index !== 0 && <TimelineConnector sx={{ bgcolor: "red" }} />}

            {/* Dot with number inside */}
            <TimelineDot
              sx={{
                bgcolor: "red",
                color: "white",
                width: "45px",
                height: "45px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {event.num}
            </TimelineDot>

            {/* Connector below except for last */}
            {index !== events.length - 1 && (
              <TimelineConnector sx={{ bgcolor: "#f25858" }} />
            )}
          </TimelineSeparator>

          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" sx={{ color: "#f25858", fontWeight: 600 }}>  
              {event.title}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {event.year}
            </Typography>
            <Typography sx={{ color: "white" }}>{event.desc}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}


export { CustomizedTimeline ,BasicTimeline,BasicTimeline2,BasicTimeline3}
