import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

// Helper function to render bullet points
const BulletPoint = ({ children, style }) => (
  <View style={style.bullet}>
    <Text style={style.bulletPoint}>•</Text>
    <Text>{children}</Text>
  </View>
);

// Dynamic styles based on the selected template
const getStyles = (template) => {
  const baseStyles = {
    page: {
      padding: 40,
      fontFamily: "Helvetica",
      fontSize: 12,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    photo: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginRight: 20,
    },
    section: {
      marginBottom: 20,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 5,
    },
    separator: {
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      marginBottom: 10,
    },
    bullet: {
      fontSize: 12,
      marginBottom: 5,
      position: "relative",
      paddingLeft: 10,
    },
    bulletPoint: {
      position: "absolute",
      left: 0,
      top: 5,
    },
  };

  switch (template) {
    case "template1":
      return {
        ...baseStyles,
        page: {
          ...baseStyles.page,
          backgroundColor: "#ffffff",
        },
        header: {
          ...baseStyles.header,
          backgroundColor: "#f3f4f6",
          padding: 20,
          borderRadius: 10,
        },
        title: {
          ...baseStyles.title,
          color: "#1e40af",
        },
      };
    case "template2":
      return {
        ...baseStyles,
        page: {
          ...baseStyles.page,
          backgroundColor: "#ffffff",
        },
        title: {
          ...baseStyles.title,
          color: "#374151",
        },
      };
    case "template3":
      return {
        ...baseStyles,
        page: {
          ...baseStyles.page,
          backgroundColor: "#ffffff",
        },
        header: {
          ...baseStyles.header,
          backgroundColor: "#1e40af",
          padding: 20,
          borderRadius: 10,
        },
        title: {
          ...baseStyles.title,
          color: "#1e40af",
        },
      };
    case "template4":
      return {
        ...baseStyles,
        page: {
          ...baseStyles.page,
          backgroundColor: "#111827",
          color: "#f3f4f6",
        },
        title: {
          ...baseStyles.title,
          color: "#3b82f6",
        },
      };
    case "template5":
      return {
        ...baseStyles,
        page: {
          ...baseStyles.page,
          backgroundColor: "#ffffff",
        },
        header: {
          ...baseStyles.header,
          backgroundColor: "#f3f4f6",
          padding: 20,
          borderRadius: 10,
        },
        title: {
          ...baseStyles.title,
          color: "#10b981",
        },
      };
    case "template6":
      return {
        ...baseStyles,
        page: {
          ...baseStyles.page,
          backgroundColor: "#ffffff",
        },
        title: {
          ...baseStyles.title,
          color: "#ef4444",
        },
      };
    default:
      return baseStyles;
  }
};

const ResumePDF = ({ formData, template = "template1" }) => {
  const styles = getStyles(template); // Get styles based on the selected template

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          {formData.photo && (
            <Image src={formData.photo} style={styles.photo} />
          )}
          {!formData.photo && (
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                backgroundColor: "#ccc",
                marginRight: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 24, color: "#fff" }}>?</Text>
            </View>
          )}
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {formData.name}
            </Text>
            <Text>{formData.position}</Text>
            <Text>{formData.phone}</Text>
            <Text>{formData.email}</Text>
            {formData.linkedin && (
              <Text style={{ color: "blue", textDecoration: "underline" }}>
                {formData.linkedin}
              </Text>
            )}
          </View>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.title}>Summary</Text>
          <View style={styles.separator} />
          <Text>{formData.summary}</Text>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.title}>Work Experience</Text>
          <View style={styles.separator} />
          {formData.experience.map((job, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: "bold" }}>{job.title}</Text>
              <Text>{job.company} | {job.dates}</Text>
              <Text>{job.description}</Text>
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.title}>Education</Text>
          <View style={styles.separator} />
          {formData.education.map((edu, index) => (
            <View key={index} style={{ marginBottom: 10 }}>
              <Text style={{ fontWeight: "bold" }}>{edu.degree}</Text>
              <Text>{edu.institution} | {edu.dates}</Text>
              <Text>CGPA: {edu.cgpa}, Specialization: {edu.specialization}</Text>
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.title}>Skills</Text>
          <View style={styles.separator} />
          {formData.skills.split(",").map((skill, index) => (
            <BulletPoint key={index} style={styles}>
              {skill.trim()}
            </BulletPoint>
          ))}
        </View>

        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.title}>Languages</Text>
          <View style={styles.separator} />
          {formData.languages.split(",").map((language, index) => (
            <BulletPoint key={index} style={styles}>
              {language.trim()}
            </BulletPoint>
          ))}
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.title}>Achievements</Text>
          <View style={styles.separator} />
          {formData.achievements.split(",").map((achievement, index) => (
            <BulletPoint key={index} style={styles}>
              {achievement.trim()}
            </BulletPoint>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;