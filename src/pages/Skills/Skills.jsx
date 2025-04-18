import useLanguage from "../../hooks/useLanguage";
import translations from "../../locales/translations";
import styles from "./Skills.module.scss";
import SkillsCard from "./SkillsCard/SkillsCard";

import CSS3 from "../../assets/img_technologies/css.svg?url";
import Docker from "../../assets/img_technologies/docker.svg?url";
import Express from "../../assets/img_technologies/express.svg?url";
import Figma from "../../assets/img_technologies/figma.svg?url";
import Git from "../../assets/img_technologies/git.svg?url";
import GitHub from "../../assets/img_technologies/github.svg?url";
import HTML5 from "../../assets/img_technologies/html.svg?url";
import Javascript from "../../assets/img_technologies/js.svg?url";
import MongoDB from "../../assets/img_technologies/mongo.svg?url";
import Mongoose from "../../assets/img_technologies/mongoose.svg?url";
import MySQL from "../../assets/img_technologies/mysql.svg?url";
import NextJS from "../../assets/img_technologies/nextjs.svg?url";
import NodeJS from "../../assets/img_technologies/node.svg?url";
import Nuxtjs from "../../assets/img_technologies/nuxt.svg?url";
import PostgreSQL from "../../assets/img_technologies/postgresql.svg?url";
import Postman from "../../assets/img_technologies/postman.svg?url";
import React from "../../assets/img_technologies/react.svg?url";
import SCSS from "../../assets/img_technologies/scss.svg?url";
import Typescript from "../../assets/img_technologies/typescript.svg?url";
import Vite from "../../assets/img_technologies/vite.svg?url";
import VSCode from "../../assets/img_technologies/vscode.svg?url";

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const imageMap = {
    CSS3: CSS3,
    Docker: Docker,
    Express: Express,
    Figma: Figma,
    Git: Git,
    GitHub: GitHub,
    HTML5: HTML5,
    Javascript: Javascript,
    MongoDB: MongoDB,
    Mongoose: Mongoose,
    MySQL: MySQL,
    NextJS: NextJS,
    NodeJS: NodeJS,
    Nuxtjs: Nuxtjs,
    PostgreSQL: PostgreSQL,
    Postman: Postman,
    React: React,
    SCSS: SCSS,
    Typescript: Typescript,
    Vite: Vite,
    VSCode: VSCode,
  };

  return (
    <section id="skills" className={styles.skillsSection}>

      <div className={styles.container}>

        <div className={styles.skillsTitle}>
          <h2 className={styles.title}>{t.skills.title}</h2>
          <p className={styles.subtitle}>{t.skills.subtitle}</p>
          <div className={styles.divider}></div>
        </div>

        {/* Frontend Skills */}
        <div className={styles.categoryContainer}>
          <h3 className={styles.categoryTitle}>{t.skills.frontend}</h3>
          <div className={styles.grid}>
            {Object.values(t.skills.frontendSkills).map((skill, index) => (

              <div key={index} className={styles.skillItem}>
                <SkillsCard
                  image={imageMap[skill.image] || skill.image}
                  imageAlt={skill.name}
                  title={skill.name}
                />
              </div>

            ))}
          </div>
        </div>

        {/* Backend Skills */}
        <div className={styles.categoryContainer}>
          <h3 className={styles.categoryTitle}>{t.skills.backend}</h3>
          <div className={styles.grid}>
            {Object.values(t.skills.backendSkills).map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <SkillsCard
                  image={imageMap[skill.image] || skill.image}
                  imageAlt={skill.name}
                  title={skill.name}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tools Skills */}
        <div className={styles.categoryContainer}>
          <h3 className={styles.categoryTitle}>{t.skills.tools}</h3>
          <div className={styles.grid}>
            {Object.values(t.skills.toolsSkills).map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <SkillsCard
                  image={imageMap[skill.image] || skill.image}
                  imageAlt={skill.name}
                  title={skill.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;