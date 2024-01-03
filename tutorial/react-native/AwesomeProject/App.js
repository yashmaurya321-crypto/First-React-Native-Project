import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity, FlatList, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name = 'Home' component={Home}/>
      <Stack.Screen name = 'Course' component={Course}/>
      <Stack.Screen name = 'About' component={About}/>
      <Stack.Screen name = 'Detail' component={Detail}/>
      <Stack.Screen name = 'Contact' component={Contact}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}
const Contact = () =>{
  const [mes, setmes] = useState('')
  return(
    <View style = {{position : 'relative', flex : 1, alignItems : 'flex-start', width : 300, gap :10, padding : 20, borderRadius : 10 }}>
      <Text style = {{color : 'blue', fontSize : 30, fontWeight : 600, alignItems : 'center', justifyContent : 'center'}}>Contact Us</Text>
      <TextInput style = {{borderWidth : 1, borderColor : 'gray', borderRadius : 8, width : '100%', height : 50}}placeholder='Enter your email'/>
      <TextInput style = {{borderWidth : 1, borderColor : 'gray', borderRadius : 8, width : '100%', height : 300}} onChangeText={(e)=>setmes(e)} placeholder='Enter your message'/>
      <TouchableOpacity style = {{alignItems : 'flex-end', borderWidth : 2, borderRadius : 10, height : 35, width : 70,alignItems : 'center', justifyContent : 'center', backgroundColor : 'blue'}} onPress={()=>{console.warn( "Your message : " + mes)}}><Text style = {{color : 'white'}}>Submit</Text></TouchableOpacity>
    </View>
  )
}
const Home = ({ navigation }) => {
  const data = [
    {
      id: '1',
      image: require('./assets/11.jpg'),
      name: 'Robert',
    },
    {
      id: '2',
      image: require('./assets/12.jpg'),
      name: 'John',
    },
    {
      id: '3',
      image: require('./assets/13.jpg'),
      name: 'Tina',
    },
    {
      id: '4',
      image: require('./assets/14.jpg'),
      name: 'Maria',
    },
  ];
  const courses = [
    {
      id: 1,
      title: 'Introduction to React',
      description: 'Learn the basics of React.js and its core concepts.',
      instructor: 'John Doe',
      duration: '4 weeks',
      image: require('./assets/2.jpg'),
      detailedSection: `
        In this course, you will dive deep into React.js and gain a solid understanding of its core concepts. Topics covered include React Components, State and Props, Hooks, and Routing. Prerequisites for this course include a basic understanding of HTML, CSS, and JavaScript.
      `,
    },
    {
      id: 2,
      title: 'Node.js Fundamentals',
      description: 'Explore the fundamentals of server-side JavaScript with Node.js.',
      instructor: 'Jane Smith',
      duration: '6 weeks',
      image: require('./assets/3.jpg'),
      detailedSection: `
        This course focuses on the fundamentals of server-side JavaScript using Node.js. You will learn about Node.js basics, Express.js, Middleware, and building RESTful APIs. Prerequisites include a good understanding of JavaScript and HTTP fundamentals.
      `,
    },
    {
      id: 3,
      title: 'Building RESTful APIs with Express',
      description: 'Learn how to build RESTful APIs using Express.js.',
      instructor: 'Mike Johnson',
      duration: '5 weeks',
      image: require('./assets/4.jpg'),
      detailedSection: `
        Gain practical skills in building RESTful APIs with Express.js. Topics covered include RESTful principles, Express.js Routing, Middleware, and Authentication. Prerequisites for this course include a basic understanding of Node.js and HTTP fundamentals.
      `,
    },
    {
      id: 4,
      title: 'JavaScript Design Patterns',
      description: 'Master common design patterns in JavaScript programming.',
      instructor: 'Chris Anderson',
      duration: '8 weeks',
      image: require('./assets/5.jpg'),
      detailedSection: `
        This course is designed to help you master common design patterns in JavaScript programming. Topics include the Singleton Pattern, Factory Pattern, Observer Pattern, and Module Pattern. Prerequisites include a good understanding of JavaScript and Object-Oriented Programming.
      `,
    },
    {
      id: 5,
      title: 'Frontend Web Development with Vue.js',
      description: 'Build modern and reactive user interfaces with Vue.js.',
      instructor: 'Emily Davis',
      duration: '7 weeks',
      image: require('./assets/6.jpg'),
      detailedSection: `
        Explore Vue.js and learn to build modern and reactive user interfaces. Topics covered include Vue.js basics, Components, Vue Router, and State Management with Vuex. Prerequisites for this course include a basic understanding of HTML, CSS, and JavaScript.
      `,
    },
    {
      id: 6,
      title: 'Databases and SQL Fundamentals',
      description: 'Gain a solid understanding of databases and SQL.',
      instructor: 'Alex Rodriguez',
      duration: '6 weeks',
      image: require('./assets/7.jpg'),
      detailedSection: `
        This course provides a solid understanding of databases and SQL. Topics include Database Design, SQL Queries, Normalization, and Transactions. Prerequisites include knowledge of Relational Database Concepts.
      `,
    },
    // Add more courses as needed
  ];
  
  

  const renderMentorItem = ({ item }) => (
    <View style={{ margin: 10, borderRadius: 10, overflow: 'hidden' }}>
      <Image style={{ borderRadius: 50, height: 90, width: 90 }} source={item.image} />
      <Text style={{ fontSize: 15, textAlign: 'center' }}>{item.name}</Text>
    </View>
  );

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Detail', {
          id: item.id,
          title: item.title,
          description: item.description,
          instructor: item.instructor,
          duration: item.duration,
          image: item.image,
          detail: item.detailedSection,
        })
      }
    >
      <View style={{ alignItems : 'center',margin: 10, borderRadius: 10, overflow: 'hidden', width : 323, }}>
        <Image style={{ borderRadius: 10, height: 150, width: '100%' }} source={item.image} />
        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingTop: 5 }}>{item.title}</Text>
       
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={{ fontSize: 40, paddingTop: 20, textAlign: 'center' }}>Find your best online Course</Text>
      <View style={{ paddingTop: 20, width: '100%' }}>
        <Text style={{ fontSize: 20, paddingBottom: 5, paddingLeft: 10 }}>Popular Mentors</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderMentorItem}
        />
      </View>

      <View style={{ paddingTop: 20, width: '100%' }}>
  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    <Text style={{ fontSize: 20, paddingBottom: 5, paddingLeft: 10 }}>Recommendation</Text>
    <TouchableOpacity onPress={() => { navigation.navigate('Course') }} style={{ fontSize: 20, paddingBottom: 4, paddingRight: 10 }}>
      <Text style = {{color : 'blue',}}>See all</Text>
    </TouchableOpacity>
  </View>
         <FlatList
          data={courses}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCourseItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{ bottom: 0 }}>
        <Menue />
      </View>
    </View>
  );
};

const Menue = () => {
  const navigation = useNavigation();

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('About')}>
        <Text style={styles.menuText}>About</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Course')}>
        <Text style={styles.menuText}>Course</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => handleNavigation('Contact')}>
        <Text style={styles.menuText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const About = ({navigation}) => {
  return (
    <ScrollView>
    <View style={styles.containerss}>
      <View>
        <Text style={styles.headingss}>About Our Learning Platform</Text>
        <View style={styles.separator} />
        <Text>
          Welcome to App, where learning meets innovation! We
          are passionate about empowering individuals through high-quality
          education and cutting-edge technology.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Our Mission:</Text>
        <Text>
          At APP, our mission is to provide accessible and
          engaging learning experiences that inspire growth, foster creativity,
          and equip individuals with the skills they need to succeed in a
          rapidly evolving world.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Founding Story:</Text>
        <Text>
          App was founded with a simple yet powerful idea: to
          make learning enjoyable and meaningful. Our journey began [mention the
          founding story or date], and since then, we've been dedicated to
          redefining the online learning experience.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Educational Philosophy:</Text>
        <Text>
          At App, we believe in fostering a dynamic learning
          environment that goes beyond traditional education. Our educational
          philosophy centers around providing:
        </Text>
        <Text>
          - **Holistic Learning:** We focus on a holistic approach to education,
          integrating theoretical knowledge with practical applications.
        </Text>
        <Text>
          - **Hands-on Learning:** Our approach emphasizes hands-on learning
          experiences, allowing users to actively engage with the content and
          build practical skills.
        </Text>
        <Text>
          - **Collaboration:** We encourage collaboration among our users,
          fostering a community of learners who can share insights and support
          each other's growth.
        </Text>
        <Text>
          - **Personalization:** Recognizing that every learner is unique, we
          offer personalized learning paths tailored to individual needs and
          preferences.
        </Text>
        <Text>
          By incorporating these principles into our educational philosophy, we
          ensure that our users not only acquire knowledge but also develop
          essential skills for real-world applications.
        </Text>
      </View>

     
      {/* Other sections ... */}

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>What Users Say:</Text>
        <Text>
          "I love this App because it provide best service.
          The courses are well-designed, and the platform is user-friendly. It's
          the perfect place to enhance my skills!"
        </Text>
        <Text style={styles.userDetails}>- Yash Maurya</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Get in Touch:</Text>
        <Text>
          Have questions or suggestions? We'd love to hear from you! Reach out
          to our friendly support team at <TouchableOpacity onPress={()=>navigation.navigate('Contact')}><Text style = {{color : 'blue'}}>Click here for assistance.</Text></TouchableOpacity> 
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Community Matters:</Text>
        <Text>
          Join our thriving community. Connect with like-minded individuals, share insights,
          and be a part of a dynamic learning network.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Stay Updated:</Text>
        <Text>
          We're constantly evolving to meet your needs. Keep an eye out for
          exciting updates, new features, and upcoming courses. The journey of
          learning never stops at App.
        </Text>
      </View>

      <View style={styles.thankYou}>
        <Text>Thank you for choosing App.</Text>
        <Text>Let's embark on a journey of knowledge together!</Text>
      </View>
      {/* Add more sections as needed */}
    </View>
    </ScrollView>
  );
};

const Course = ({navigation}) => {
  const courses = [
    {
      id: 1,
      title: 'Introduction to React',
      description: 'Learn the basics of React.js and its core concepts.',
      instructor: 'John Doe',
      duration: '4 weeks',
      image: require('./assets/2.jpg'),
      detailedSection: `
        In this course, you will dive deep into React.js and gain a solid understanding of its core concepts. Topics covered include React Components, State and Props, Hooks, and Routing. Prerequisites for this course include a basic understanding of HTML, CSS, and JavaScript.
      `,
      rate : "⭐⭐⭐☆☆"
    },
    {
      id: 2,
      title: 'Node.js Fundamentals',
      description: 'Explore the fundamentals of server-side JavaScript with Node.js.',
      instructor: 'Jane Smith',
      duration: '6 weeks',
      image: require('./assets/3.jpg'),
      detailedSection: `
        This course focuses on the fundamentals of server-side JavaScript using Node.js. You will learn about Node.js basics, Express.js, Middleware, and building RESTful APIs. Prerequisites include a good understanding of JavaScript and HTTP fundamentals.
      `,
      rate : "⭐⭐⭐⭐☆"
    },
    {
      id: 3,
      title: 'Building RESTful APIs with Express',
      description: 'Learn how to build RESTful APIs using Express.js.',
      instructor: 'Mike Johnson',
      duration: '5 weeks',
      image: require('./assets/4.jpg'),
      detailedSection: `
        Gain practical skills in building RESTful APIs with Express.js. Topics covered include RESTful principles, Express.js Routing, Middleware, and Authentication. Prerequisites for this course include a basic understanding of Node.js and HTTP fundamentals.
      `,
      rate : "⭐⭐⭐⭐☆"
    },
    {
      id: 4,
      title: 'JavaScript Design Patterns',
      description: 'Master common design patterns in JavaScript programming.',
      instructor: 'Chris Anderson',
      duration: '8 weeks',
      image: require('./assets/5.jpg'),
      detailedSection: `
        This course is designed to help you master common design patterns in JavaScript programming. Topics include the Singleton Pattern, Factory Pattern, Observer Pattern, and Module Pattern. Prerequisites include a good understanding of JavaScript and Object-Oriented Programming.
      `,
      rate : "⭐⭐⭐⭐⭐"
    },
    {
      id: 5,
      title: 'Frontend Web Development with Vue.js',
      description: 'Build modern and reactive user interfaces with Vue.js.',
      instructor: 'Emily Davis',
      duration: '7 weeks',
      image: require('./assets/6.jpg'),
      detailedSection: `
        Explore Vue.js and learn to build modern and reactive user interfaces. Topics covered include Vue.js basics, Components, Vue Router, and State Management with Vuex. Prerequisites for this course include a basic understanding of HTML, CSS, and JavaScript.
      `,
      rate : "⭐⭐⭐⭐⭐"
    },
    {
      id: 6,
      title: 'Databases and SQL Fundamentals',
      description: 'Gain a solid understanding of databases and SQL.',
      instructor: 'Alex Rodriguez',
      duration: '6 weeks',
      image: require('./assets/7.jpg'),
      detailedSection: `
        This course provides a solid understanding of databases and SQL. Topics include Database Design, SQL Queries, Normalization, and Transactions. Prerequisites include knowledge of Relational Database Concepts.
      `,
      rate : "⭐⭐⭐☆☆"
    },
    // Add more courses as needed
  ];
  
  
 
    // Add more courses as needed
  

  return (
    <View style = {{alignItems : 'center'}}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style = {{ marginBottom: 16,
            borderWidth: 1,
            paddingBottom: 8,
            width: 300,
            alignItems: 'center',
            justifyContent : 'center',
            borderRadius : 5
            }}>
            <Image  style = {{height : 200, width : 297, borderRadius : 5}}source={item.image}  />
            <Text style = {{fontSize : 25,fontWeight : "bold"}}>{item.title}</Text>
            <Text style = {{color : 'gray', paddingTop : 5}}>{item.description}</Text>
            <Text style = {{paddingTop : 5}}>Instructor: {item.instructor}</Text>
            <Text>Duration: {item.duration}</Text>
            <TouchableOpacity onPress = {()=>{
              navigation.navigate('Detail',{
                id : item.id,
                title : item.title,
                description : item.description,
                instructor : item.instructor,
                duration : item.duration,
                image : item.image,
                detail : item.detailedSection,
                rate : item.rate
              })
            }}style={[styles.moreInfoButton,{}]}>
              <Text style={{ color: 'white', }}>More INFO..</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const Detail = ({route}) =>{
  const { id, title, description, instructor, duration, image,detail, rate } = route.params;
  return (
    <View style={{flex : 1  }}>
    <Image style={{ height: '30%', width: '100%', borderRadius: 5 }} source={image} />
    <Text style={{ fontSize: 25, fontWeight: 'bold', paddingTop: 10, paddingLeft : 20, paddingRight : 10 }}>{title}</Text>

    
    <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 10,paddingLeft : 20 ,paddingRight : 10}}>Price : <Text style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 10, color : 'blue' }}>340$</Text> <Text style={{ color: 'gray',fontWeight: 'bold', paddingTop: 10  }}>700$</Text> </Text> 
    <Text style = {{fontSize: 17, fontWeight: 'bold',paddingTop: 10,paddingLeft : 20 ,paddingRight : 10}}>Rating : ⭐⭐⭐⭐☆ </Text>
    <Text style={{ color: 'gray', paddingTop: 5,paddingLeft : 20,paddingRight : 10 }}>{description}</Text>
    <Text style={{  paddingTop: 5,
    alignItems: 'center', paddingLeft : 20,paddingRight : 10}}>Instructor: {instructor}</Text>
    <Text style={{   alignItems: 'center',
    justifyContent: 'center',paddingLeft : 20,paddingRight : 10 }}>Duration: {duration}</Text>
    <Text style={{ color: 'gray',paddingLeft : 20,paddingRight : 10 }}> {detail}</Text>
    {/* You can add more details here based on your requirements */}
   <View style = {{alignItems : 'center'}}><TouchableOpacity style = {{alignItems : 'center', justifyContent : 'center',backgroundColor : 'blue', width : 70, borderRadius : 20, height : 56}}onPress={( )=>{console.warn( title, description)}}><Text style = {{color : 'white'}}>Buy</Text></TouchableOpacity></View> 
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'gray',
    paddingVertical: 10,
    width: '100%',
  },
  menuItem: {
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 16,
    color: 'white',
  },
  moreInfoButton: {
    padding: 10,
   
    alignItems: 'center',
    width: '50%', // Responsive width
    backgroundColor: 'skyblue',
    borderRadius: 45,

  },
  containerss: {
    padding: 20,
  },
  headingss: {
    fontSize: 25,
  },
  separator: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  section: {
    marginTop: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  thankYou: {
    marginTop: 20,
    fontStyle: 'italic',
  },
  userDetails: {
    fontStyle: 'italic',
    marginTop: 5,
  },
});
