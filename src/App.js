import React from "react";
import "./App.css";
import pencil from "./pencil.png";
import github from "./githubGrey.png";
import linkedin from "./linkedinGrey.png";
import resume from "./resumeGrey.png";
import time from "./time.png";
import spotify from "./spotify.png";
import { Route, Link, Routes } from "react-router-dom";
import { CodeBlock, atomOneLight } from "react-code-blocks";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/notes" title="notes" element={<Notes />} />
        <Route exact path="/complexity" title="complexity" element={<Complexity />} />
        <Route exact path="/miscellania" title="miscellania" element={<Miscellania />} />
      </Routes>
    );
  }
}

function Home() {
  return (
    <div className="container">
        <div className="title">
          <h1>nathan embaye</h1>
        </div>
        <div className="body">
          <p>
            Public policy junkie and software engineer. I enjoy turning elusive
            business requirements into performant, scalable code. Currently I
            do just that at Canada's{" "}
            <a href="https://www.bankofcanada.ca/core-functions/">
              Central Bank
            </a>
            .
            <br />
            <br />
            When I'm not developing I like to lift,{" "}
            <a href="https://riosmauricio.com/wp-content/uploads/2020/07/Basic-Economics-5th-Edition-Thomas-Sowell.pdf">
              read
            </a>
            {""} and frequent comedy clubs. Feel free to check out my latest project,
            a COVID-19 relief initiative:{" "}
            <a href="https://github.com/nathanembaye/DekiProject">
              Deki Ottawa
            </a>
            .
          </p>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/nathanembaye/">
            <img className="linkedin" src={linkedin} />
          </a>
          <a href="https://github.com/nathanembaye">
            <img className="github" src={github} />
          </a>
          <Link to="/notes">
            <img className="pencil" src={pencil} />
          </Link>
          <a href={process.env.PUBLIC_URL + "/Resume.pdf"} target="_blank">
            <img className="resume" src={resume} />
          </a>
        </div>
      </div>
  );
}

function Notes() {
  return (
      <div className="article">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1><Link to="/">notes</Link></h1>
        <p>writing about things to better understand them.</p>
        <br/>
        <br/>
        <br/>
        <div className="blogDescripion">
          <Link to="/complexity">computational complexity</Link>
          <p>a fancy way of asking: how much work is it to run this algorithm?</p>
          <Link to="/miscellania">miscellania</Link>
          <p>Post-it worthy essay's I’ve come across in 2022</p>
        </div>
      </div>
  );
}

function Complexity() {
  return (
      <div className="article">
        <div className="articleDescripion">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>computational complexity</h1>
        <Link to="/notes">apr 9, 2022</Link>
        <p><i>Computational complexity is the estimate of computer resources an algorithm needs to complete a execution. In it there's a particular focus on two categories: time and space.</i></p>
        <br/>
        <h3>time complexity</h3>
        <p>We should begin by saying time complexity is not the actual hours:minutes:seconds required to execute any particular piece of code. That depends on a myriad of factors like programming language, operating system and processing power.</p>
        <p>Instead, time complexity describes how long an algorithm will take to execute with changes in its input size. In other words, how the execution time will increase or decrease based on how big or small the input data is. Why an algorithm's lifetime time could differ given a new input length is because it could change the number of operations being performed.</p>
        <h5>constant time - O(1)</h5>
        <p>An algorithm is said to have constant time, O(1), when how long it takes to execute is not dependent on input length. Simply -- it takes the same amount of time to run no matter the size of the input.</p>
        <h5>logarithmic time - (log n)</h5>
        <p>An algorithm is said to have logarithmic time, O(log n), when it begins processing input at its initial length but reduces the size of data to process in each step. This means its number of operations won't be equal to the input length, or O(n), since it’s continually decreasing. These types of operations are often found with data structures like Binary Search Trees.</p>
        <h5>linear time - O(n)</h5>
        <p>An algorithm is said to have linear time, O(n), when how long it takes to execute increases proportionally (1 to 1) with its input length. This occurs in cases when we have input data that needs to have every value inside it processed, and each of those assessments take constant time, O(1). This growth can be understood as <i>cn</i>, where <i>c = 1</i> and  <i>n = input length</i>.</p>
        <h5>quadratic time - (n<sup>2</sup>)</h5>
        <p>An algorithm is said to have Quadratic time, O(n<sup>2</sup>), when the execution time increases proportionally to the squared size of the input length. This occurs in cases when we have input data that needs to have every value inside it processed, but each of those assessments must process the entire length of the original input data with it. These types of algorithms are most commonly seen with nested for loops.</p>
        <h5>time complexity comparison </h5>
        <img width="600" height="450" src={time} />
        <p>Above we can see the time complexity differences illustrated</p>
        <h5>example</h5>
        <p>Say we have an array sorted in ascending order:</p>
        <CodeBlock
          text={`arr = [1, 2, 3, 4]`}
          language={"python"}
          showLineNumbers={true}
          theme={atomOneLight}/>
        <p>Then, we have an operation that retrieves that array's smallest element: </p>
        <CodeBlock
          text={`def getSmallestElement(arr){
      smallestNum = arr[0]
      return smallestNum
}`}
          language={"python"}
          showLineNumbers={true}
          theme={atomOneLight}/>
        <p>The time it takes that operation to complete is constant, O(1), since we know the smallest element is always in the first index.</p>
        <p>Even if the input data doubles in size:</p>
        <CodeBlock
          text={`arr = [1, 2, 3, 4, 5, 7, 8]`}
          language={"python"}
          showLineNumbers={true}
          theme={atomOneLight}/>
        <p>It still performs the same number of operations, despite greater input length. That's why it still takes the same amount of time to run.</p>
        <p>This would differ however if the array was unsorted:</p>
        <CodeBlock
          text={`arr = [3, 2, 1, 4]`}
          language={"python"}
          showLineNumbers={true}
          theme={atomOneLight}/>
        <p>In this case we’d have to traverse the whole array instead of stopping at the first element:</p>
        <CodeBlock
          text={`def getSmallestElement(arr){
      smallestNum = arr[0]
      for i in range(0,  len(arr)):
            if arr[i] < smallestNum:
                smallestNum = arr[i]
      return smallestNum
}`}
          language={"python"}
          showLineNumbers={true}
          theme={atomOneLight}/>
        <p>This is because there’s no way to know if the element we’re “visiting” is actually the smallest. Say we’ve traveled to the third element, which is in fact the smallest number. Until we search the rest of the array we can’t be certain its actually the smallest. That means the operations execution time (number of steps it has) is now the length of the whole array, or linear, O(n).</p>
        <p>This can be seen if the input doubles in size:</p>
        <CodeBlock
          text={`arr = [3, 2, 1, 4, 7, 6, 8, 5]`}
          language={"python"}
          showLineNumbers={true}
          theme={atomOneLight}/>
        <p>Since our algorithm processes each value in the input, the execution time will increase with input length - and because that growth is proportional (1 to 1) to the change in size, its linear, O(n).</p>
        <h5>the worst case</h5>
        <p>With that being said there are cases where an unsorted array input could execute in constant time:</p>
        <CodeBlock
          text={`arr = [3]`}
          language={"python"}
          showLineNumbers={true}
          theme={atomOneLight}/>
        <p>Since the input here is a single element it would have a real execution time that is O(1). But this reveals something about our time complexity estimates: we are calculating the worst-case. This is in consideration of the varying input sizes. We cannot guarantee the unsorted input array will always be a length of 1, so we cannot call it constant. Since its execution time grows at input length, we call its complexity by the worst-case, linear.</p>
        <br/>
        <h3>space complexity</h3>
        <p>The space complexity of an algorithm is the amount of memory it requires to execute completely. It’s calculated as <i>space complexity = auxiliary space + input space.</i></p>
        <p>Auxiliary space is defined as all the memory used inside the algorithm itself (think variables, loops, data structures, etc.), while input space is the memory used for the data that goes into the algorithm for processing. Differentiating that, when comparing different algorithms' space complexity, we would only consider auxiliary space since they’re solutions accepting the same sets of data.</p>
        <p>Similar to time complexity, space complexity measures the storage needed relative to changes in the size of input data. That is, how the storage used during execution time increases or decreases based on how big or small the input data is.</p>
        <h5>example</h5>
        <p>Say we have three variables that are integers:</p>
        <CodeBlock
          text={`a = 1, b = 2, c = 3`}
          language={"python"}
          showLineNumbers={true}
          theme={atomOneLight}/>
        <p>Then we have an operation that sums those variables:</p>
        <CodeBlock
          text={`def sum(a, b, c):
        num = a + b + c
        return num`}
          language={"python"}
          showLineNumbers={true}
          theme={atomOneLight}/>
        <h5>constant space</h5>
        <p>In this operation, there is 3 units of input space via the parameters and 1 unit of auxiliary space by the local variable. Since we know only 3 integers will ever be passed - O(1), and only one variable is ever storing their sum - O(1), the space will always remains the same, or constant, as O(1) = O(1) + O(1).</p>  
        <h5>linear space</h5>
        <CodeBlock
          text={`def product(arr):
        nums = []
        mult = 2
        for i in range(0, len(arr)):
              nums.append(mult * arr[i])
        return nums`}
          language={"python"}
          showLineNumbers={true}
          theme={atomOneLight}/>
        <p>In this operation, since the input space (array length) could be any number - O(n), and we store each entry multiplied by two into an array as auxiliary space - O(n), we arrive at a complexity space of O(n) = O(n) + O(n).</p>
        <br/>
        <br/>
        </div>
      </div>
  );
}

function Miscellania() {
  return (
        <div className="article">
          <div className="articleDescripion">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>miscellania</h1>
            <Link to="/notes">apr 15, 2022</Link>
            <br/> 
            <br/> 
            <br/> 
            <br/>            
            <a href="https://hbr.org/2015/06/the-great-decoupling"><i>The Great Decoupling</i></a>
            <p>Technology is increasing productivity (profit) but reducing the need for some kinds of workers. The pie is being less equally distributed because of it. Brynjolfsson and McAfee explore the implications: who will win, who will lose, and how businesses will need to respond.</p>
            <a href="https://nypost.com/2019/08/17/luxury-beliefs-are-the-latest-status-symbol-for-rich-americans/"><i>Luxury Beliefs</i></a>
            <p>Luxury beliefs are ideas and opinions that confer status on the rich at very little cost, while taking a toll on the lower class.</p>
            <a href="https://bariweiss.substack.com/p/americas-lost-boys-and-me?s=r"><i>America's Lost Boys and Me</i></a>
            <p>Rob Henderson was in foster-care living out of garbage bags at age seven and smoking weed at nine. Today, a Yale graduate and Ph.D. candidate in Social Psychology at Cambridge, he describes himself as an outsider living in the Ivory Tower.</p>
            <a href="https://www.theatlantic.com/business/archive/2014/02/how-to-save-marriage-in-america/283732/"><i>How to Save Marriage in America</i></a>
            <p>The old form of marriage, based on outdated social rules and gender roles, is fading. A new version is emerging—egalitarian, committed, and focused on children.</p>
            <a href="http://www.paulgraham.com/smart.html"><i>Beyond Smart</i></a>
            <p>What was special about Einstein?</p>
            <br/>
            <br/>
          </div>
        </div>
  );
}

export default App;
