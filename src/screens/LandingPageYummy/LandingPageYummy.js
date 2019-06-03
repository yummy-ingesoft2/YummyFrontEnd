import React from "react";
import { Link } from "react-router-dom";
//import "./landingpage.css";
import { Row, Col, Jumbotron, Button } from "reactstrap";
import { LandingYummmyContainer } from "./StylesYummy";

const LandingPageYummy = () => {
  return (
    <LandingYummmyContainer>
    <View style={styles.container}>
      <Card style={styles.card}>
        <AssetExample />
        <Text style={styles.txWelcome}>
          Welcome!
        </Text>
        <Text style={styles.paragraph}>
          The best choice in your menu
        </Text>
      </Card>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{ path: '/assets/yummy-logo.jpeg' }}
        />
        <Text style={styles.name}>{}</Text>
    </View>
    </LandingYummmyContainer>
  );
};

export default LandingPageYummy;
