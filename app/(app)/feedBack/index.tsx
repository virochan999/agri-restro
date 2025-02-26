import { StyleSheet, Text, View } from "react-native";
import Dropdown from "@/src/components/Dropdown";
import TextInput from "@/src/components/atoms/TextInput/TextInput";

function index() {
  const handleSelction =(val:string)=>{
    console.log(val);
  }
  return (
    <View>
      <Text>“Help Us Improve Your Experience”</Text>
      <Text>
        We value your feedback! Share any suggestions or issues related to the
        app’s design, features, or user experience.
      </Text>
      <Text>UI Feedback & Suggestions Page</Text>

      <Dropdown label="UI Design & Navigation" onSelect={(val:any)=>handleSelction(val)} options={[
        {label: 'Smooth', code: 'Smooth'},
        {label: 'Needs Improvement', code: 'Needs Improvement'},
        {label: 'Difficult to Use', code: 'Difficult to Use'},
      ]} />
      <TextInput
        labelStyles={[styles.label]}
        label="Feature Requests"
        placeholder=""
        id="FeatureReporting"
      />
      <TextInput
        labelStyles={[styles.label]}
        label="Bug Reporting"
        placeholder=""
        id="BugReporting"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 6
   },
})
export default index;
