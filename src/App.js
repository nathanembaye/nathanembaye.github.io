import React, { useEffect } from "react";
import "./App.css";
import treeTraversal from "./treetraversal.png";
import chart from "./chart.svg";
import sll0 from "./sll0.png";
import sll1 from "./sll1.png";
import sll2 from "./sll2.png";
import sll3 from "./sll3.png";
import sll4 from "./sll4.png";
import intervals from "./intervals.png";
import bt from "./bt.png";
import { Route, Link, Routes } from "react-router-dom";
import { HashLink as HashLink } from 'react-router-hash-link';
import Menu from "./Menu.js"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import backtrack from "./backtrack.jpg";
import backtrack3 from "./backtrack3.jpg";
import backtrack2 from "./backtrack2.jpg";
import backtrack1 from "./backtrack1.jpg";
import backtrack4 from "./backtrack4.jpg";
import bs1 from "./bs1.jpg";
import bs2 from "./bs2.jpg";
import bs3 from "./bs3.jpg";
import bs4 from "./bs4.jpg";



class App extends React.Component {
  
  render() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" title="about" element={<About />} />
            <Route path="/notes" title="notes" element={<Notes />} />
            <Route path="/complexity" title="complexity" element={<Complexity />} />
            <Route path="/miscellania" title="miscellania" element={<Miscellania />} />
            <Route path="/grokking" title="grokking" element={<Grokking />} />
            <Route path="/slidingwindow" title="slidingwindow" element={<SlidingWindow />} />
            <Route path="/twopointers" title="twopointers" element={<TwoPointers />} />
            <Route path="/fastslow" title="fastslow" element={<FastSlow />} />
            <Route path="/mergeintervals" title="mergeintervals" element={<MergeIntervals />} />
            <Route path="/cyclicsort" title="cyclicsort" element={<CyclicSort />} />
            <Route path="/llreversal" title="llreversal" element={<LinkListReversal />} />
            <Route path="/bfs" title="bfs" element={<BFS />} />
            <Route path="/dfs" title="dfs" element={<DFS />} />
            <Route path="/twoheaps" title="twoheaps" element={<TwoHeaps />} />
            <Route path="/backtracking" title="backtracking" element={<Backtracking />} />
            <Route path="/binarysearch" title="binarysearch" element={<BinarySearch />} />
            <Route path="/datalake" title="datalake" element={<DataLake />} />
        </Routes>
    );
  }
}

function ChangeTitle(title) {
  useEffect(() => {
    document.title = title;
  }); 
}


function Home() {
  ChangeTitle("home")
 

  return (
    <div className="homeContainer">
      <div className="home">
          <div className="title">
            <h1><span>λ</span> nathan embaye</h1>
           
          </div>
          <div className="home">
            <Link to="/about">about</Link>
            <br/>
            <Link to="/notes">notes</Link>
            <br/>
            <a href={process.env.PUBLIC_URL + "/Resume.pdf"}>resume</a>
            <br/>
            <a href="mailto:nathanembaye26@gmail.com">contact</a>
          </div>  
        </div>
      </div>
  );
}

function About() {
  ChangeTitle("about")
  return (
    <div>
      <Menu/>
    </div>); 
}

function Notes() {
  ChangeTitle("notes")
  return (
    <div>
        <Menu/>
        <div className="article">
          <div className="articleDescripion">
            <br/>
            <br/>
            <br/> 
            <h1>notes</h1>
            <br/> 
            <br/> 
            <br/> 
            <div className="bullet">
            <Link style={{ textDecoration: 'none' }} to="/complexity">computational complexity</Link>  
            <h5>09 Apr 2022</h5>  
            <p>a fancy way of asking: how much work is it to run this algorithm?</p>
            </div>
            <br/>
            <div className="bullet">
            <Link style={{ textDecoration: 'none' }} to="/miscellania">miscellania</Link>  
            <h5>15 Apr 2022</h5>          
            <p>{'<stuff/>'} </p>
            </div>
            <div className="bullet">
            <Link style={{ textDecoration: 'none' }} to="/datalake">data lake</Link>  
            <h5>14 May 2023</h5>          
            <p>{'a modern data architecture'} </p>
            </div>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
     </div>); 
}
 

function Complexity() {
  ChangeTitle("computational complexity")
  return ( <div><Menu/>
      <div className="article">
        <div className="articleDescripion">
        <br/>
        <br/>
        <h1>computational complexity</h1>
        <p className="date">apr 9, 2022</p>
        <p><i>Computational complexity is the estimate of computer resources an algorithm needs to complete a execution. In it there's a particular focus on two categories: time and space.</i></p>
        <br/>
        <h3>time complexity</h3>
        <p>We should begin by saying time complexity is not the actual hours:minutes:seconds required to execute any particular piece of code. That depends on a myriad of factors like programming language, operating system and processing power.</p>
        <p>Instead, time complexity describes how long an algorithm will take to execute with changes in its input size. More specifically, how it will increase or decrease based on how big or small the input data is. Why this alters an algorithm's lifetime is because it could change the number of operations being performed.</p>
        <h5>constant time - O(1)</h5>
        <p>An algorithm is said to have constant time, O(1), when how many operations it performs is independent of input length. Simply -- it completes the same number of tasks no matter input size.</p>
        <h5>logarithmic time - O(log n)</h5>
        <p>An algorithm is said to have logarithmic time, O(log n), when it begins processing input at its initial length but divides said data by a constant (usually two) each iteration until its less or equal to 1. This is most commonly seen with binary search trees.</p>
        <h5>linear time - O(n)</h5>
        <p>An algorithm is said to have linear time, O(n), when how long it takes to execute increases proportionally (1 to 1) with its input length. This occurs in cases when we have input data that needs to have every value inside it processed, and each of those assessments is constant, O(1). This growth can be understood as <i>cn</i>, where <i>c = 1</i> and  <i>n = input length</i>.</p>
        <h5>quadratic time - O(n<sup>2</sup>)</h5>
        <p>An algorithm is said to have quadratic time, O(n<sup>2</sup>), when the execution time increases proportionally to the squared size of the input length. This occurs in cases when we have input data that needs to have every value inside it processed, but each of those assessments must process the entire length of the original input data with it. These types of algorithms are most commonly seen with nested for loops.</p>
        <br/>
        <br/>
        <h3>space complexity</h3>
        <p>The space complexity of an algorithm is the amount of memory it requires to execute. Similar to time complexity, it measures how much storage is used relative to changes in the size of input data.</p>
        <p>It’s sum is <i>space complexity = auxiliary space + input space.</i></p>
        <p>Auxiliary space is defined as all the memory used inside the algorithm itself (think variables, loops, data structures, etc). In contrast, input space is the memory used for the data that goes into the algorithm for processing. Differentiating that, when comparing different algorithms' space complexity, we would only consider auxiliary space since they’re solutions accepting the same input.</p>
        <h5>constant space - O(1)</h5>
        <p>An algorithm is said to use constant space when the amount of memory used each execution remains the same, no matter the size of the input. A telltale of this is when only booleans and integers are ever stored.</p> 
        <h5>linear space - O(n)</h5>
        <p>An algorithm is said to use linear space when the amount of memory used for an execution, could take up to the length of the given input. A giveaway for this is the requirement of a linear data structure, like list or a hash table.</p>         
        <br/>
        <br/>
        <br/>
        <br/>
        <h3>big-o chart</h3>
        <p>An illustration of how increasing input lengths affect different big-o complexities.</p>
        <br/>
        <img width="500" height="400" src={chart} alt='' />
        <br/>
        <br/>
        <br/>
        </div>
      </div>
  </div>); 
}


function DataLake() {
  ChangeTitle("data lake")
  return ( <div><Menu/>
      <div className="article">
        <div className="articleDescripion">
        <br/>
        <br/>
        <h1>data lake</h1>
        <p className="date">may 14, 2023</p>
        <p><i>Data architecture describes the design and organization of the systems used to collect, store, transform and serve data.</i></p>
        <br/>
        <h3>a hisorical excerpt</h3>
        <p><b>The quote below is from the book "fundementals of data engineering", where Joe Reis and Matt Housley wonderfully describe how we got to modern data platforms:</b></p>
        <br/>
        <div class="quote">
        <p><i>"The birth of the data engineer arguably has its roots in data warehousing, dating as far back as the 1970s, with the business data warehouse taking shape in the 1980s and Bill Inmon officially coining the term data warehouse in 1989. After engineers at IBM developed the relational database and Structured Query Language (SQL), Oracle popularized the technology. As nascent data systems grew, businesses needed dedicated tools and data pipelines for reporting and business intelligence (BI). To help people correctly model their business logic in the data warehouse, Ralph Kimball and Inmon developed their respective eponymous data-modeling techniques and approaches, which are still widely used today.</i></p>
        <p><i>Data warehousing ushered in the first age of scalable analytics, with new massively parallel processing (MPP) databases that use multiple processors to crunch large amounts of data coming on the market and supporting unprecedented volumes of data. Roles such as BI engineer, ETL developer, and data warehouse engineer addressed the various needs of the data warehouse. Data warehouse and BI engineering were a precursor to today’s data engineering and still play a central role in the discipline.</i></p>
        <p><i>The internet went mainstream around the mid-1990s, creating a whole new generation of web-first companies such as AOL, Yahoo, and Amazon. The dot-com boom spawned a ton of activity in web applications and the backend systems to support them—servers, databases, and storage. Much of the infrastructure was expensive, monolithic, and heavily licensed. The vendors selling these backend systems likely didn’t foresee the sheer scale of the data that web applications would produce.</i></p>
        <p><i>Fast-forward to the early 2000s, when the dot-com boom of the late ’90s went bust, leaving behind a tiny cluster of survivors. Some of these companies, such as Yahoo, Google, and Amazon, would grow into powerhouse tech companies. Initially, these companies continued to rely on the traditional monolithic, relational databases and data warehouses of the 1990s, pushing these systems to the limit. As these systems buckled, updated approaches were needed to handle data growth. The new generation of the systems must be cost-effective, scalable, available, and reliable.</i></p>
        <p><i>Coinciding with the explosion of data, commodity hardware—such as servers, RAM, disks, and flash drives—also became cheap and ubiquitous. Several innovations allowed distributed computation and storage on massive computing clusters at a vast scale. These innovations started decentralizing and breaking apart traditionally monolithic services. The “big data” era had begun.</i></p>
        <p><i>In 2003, Google published a paper on the Google File System, and shortly after that, in 2004, a paper on MapReduce, an ultra-scalable data-processing paradigm. In truth, big data has earlier antecedents in MPP data warehouses and data management for experimental physics projects, but Google’s publications constituted a “big bang” for data technologies and the cultural roots of data engineering as we know it today. </i></p>
        <p><i>The Google papers inspired engineers at Yahoo to develop and later open source Apache Hadoop in 2006. It’s hard to overstate the impact of Hadoop. Software engineers interested in large-scale data problems were drawn to the possibilities of this new open source technology ecosystem. As companies of all sizes and types saw their data grow into many terabytes and even petabytes, the era of the big data engineer was born.</i></p>
        <p><i>Around the same time, Amazon had to keep up with its own exploding data needs and created elastic computing environments (Amazon Elastic Compute Cloud, or EC2), infinitely scalable storage systems (Amazon Simple Storage Service, or S3), highly scalable NoSQL databases (Amazon DynamoDB), and many other core data building blocks. Amazon elected to offer these services for internal and external consumption through Amazon Web Services (AWS), becoming the first popular public cloud. AWS created an ultra-flexible pay-as-you-go resource marketplace by virtualizing and reselling vast pools of commodity hardware. Instead of purchasing hardware for a data center, developers could simply rent compute and storage from AWS.</i></p>
        <p><i>As AWS became a highly profitable growth engine for Amazon, other public clouds would soon follow, such as Google Cloud, Microsoft Azure, and DigitalOcean. The public cloud is arguably one of the most significant innovations of the 21st century and spawned a revolution in the way software and data applications are developed and deployed.</i></p>
        <p><i>The early big data tools and public cloud laid the foundation for today’s data ecosystem. The modern data landscape—and data engineering as we know it now—would not exist without these innovations."</i></p>
        </div>
        <br/>
        <p>So, what does this mean? Data warehouses were the standard central data repository until something more cost-efficient, scalable, available and reliable was made. Once compute and storage became cheap and distributed the standard became data lakes (with data warehouses only complimenting them). And today, we are seeing even further development with the data lakehouse.</p>
        <br/>
        <h3>data warehouse</h3>
        <p>A data warehouse is a centralized location (database) exclusively for structured data. Its data can come from disparate sources, has already been processed and or transformed with a predefined schema designed specifically for  business analytics, reporting and more. </p>
        <p>A data warehouse should not be confused as being the exact same thing as a database. Every data warehouse is a database but not every database is a data warehouse. A data warehouse is only a OLAP (On-Line Analytical Processing) database, while a database generally can also be a OLTP (On-Line Transactional Processing) system, for storing the current data required to power an application</p>
        <br/>
        <h3>data lake</h3>
        <p>A data lake is the modern business’ central hub for storing and processing all structured, semi-structured and unstructured data. Inside it you’ll find different zones - raw, standardized and curated - each serving a distinct purpose.</p>
        <h5>raw zone</h5>
        <p>The raw zone is for storing data in its original format. This helps with data lineage. All datasets downstream can be recreated from their raw state, so it's advantageous to store such immutably.</p>
        <p>The standardized zone stores data transformed to meet internal quality standards. Not all data ingested is in an optimal or even workable format. So, we enforce standards to make datasets as uniform and efficient to work with as possible. This can be using file formats like Parquet or applying ISO data standards.</p>
        <h5>curated zone</h5>
        <p>The curated zone is for storing data that’s had business logic applied to it. These transformations come from the business requirements defined by a project's stakeholders. The curated schema is ultimately what data customers consume.</p>
        <br/>
        <h3>two-tier data architecture</h3>
        <p>This is what's most commonly seen today. It is when both the data warehouse and the data lake are side-by-side in one ecosystem. Typically, what happens here is data is ETL'd from its source to the data lake and once again ETL'd into the data warehouse for business intelligence and data analytics.</p>
        <br/>
        <h3>data lakehouse</h3>
        <p>A data lakehouse is a hybrid of the data warehouse and the data lake. It uses blob storage, so it benefits from the data lake's cost-efficiency and scale. However, it also allows the ACID transactions that a warehouse does. This is possible due to a metdata layer sitting atop the aforementioned cloud storage. This open architecture is most commonly seen with parquet or delta format. Databricks recently publshed a paper on this, the <a href="http://cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf">data lakehouse</a>.</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
      </div>
  </div>); 
}

function Miscellania() {
  ChangeTitle("miscellania")
  return ( <div><Menu/>
        <div className="article">
          <div className="articleDescripion">
            <br/>
            <br/>
            <h1>miscellania</h1>
            <p className="date">apr 15, 2022</p>
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
            <a href="http://www.paulgraham.com/smart.html"><i>Beyond Smart</i></a>
            <p>What was special about Einstein?</p>
            <a href="https://timdillontalks.tumblr.com/post/138638249053/embed"><i>Pizza Hut</i></a>
            <p>We live in a time of disorienting change. I think Obama said that. But the Pizza Hut lunch buffet remains the same. And that is a comfort.</p>
            <a href="https://timdillontalks.tumblr.com/post/139544641093/embed"><i>Staten Island</i></a>
            <p>I took a train to a boat to a bus every morning.</p>
            <a href="https://timdillontalks.tumblr.com/post/148652686978/embed"><i>Dennis</i></a>
            <p>Life in the big city.</p>
            <a href="https://web.archive.org/web/20200706082311/http://iwarrior.uwaterloo.ca/2018/03/28/44837/44837/"><i>Dude Boy</i></a>
            <p>Unlike me, he had the good sense to be born head first.</p>
            <a href="https://www.theatlantic.com/business/archive/2014/02/how-to-save-marriage-in-america/283732/"><i>How to Save Marriage in America</i></a>
            <p>The old form of marriage, based on outdated social rules and gender roles, is fading. A new version is emerging—egalitarian, committed, and focused on children.</p>
            <a href="https://www.youtube.com/watch?v=ZtpWTJ7Jsh8"><i>Geohot</i></a>
            <p>Do it faster, do it better.</p>
            <br/>
            <br/>
          </div>
        </div>
  </div>); 
}

function Grokking() {
  ChangeTitle("grokking")
  return ( <div><Menu/>
        <div className="article">
          <div className="articleDescripion">
            <div class="container">
              <div class="box" id="one">
                <HashLink style={{ textDecoration: 'none' }} to="/grokking#arr">sliding window</HashLink> 
              </div>
              <div class="box" id="two">
                <HashLink style={{ textDecoration: 'none' }} to="/grokking#pointers">two pointers</HashLink> 
              </div>
              <div class="box" id="three">
                <HashLink style={{ textDecoration: 'none' }} to="/grokking#pointers">pointers</HashLink> 
              </div>
              <div class="box" id="four">
                <HashLink style={{ textDecoration: 'none' }} to="/grokking#intervals">intervals</HashLink> 
              </div>
              <div class="box" id="five">
                <HashLink style={{ textDecoration: 'none' }} to="/grokking#sort">sorting</HashLink> 
              </div>
              <div class="box" id="six">
                <HashLink style={{ textDecoration: 'none' }} to="/grokking#sll">linked-list</HashLink> 
              </div>
              <div class="box" id="seven">
                <HashLink style={{ textDecoration: 'none' }} to="/grokking#bfs">bfs</HashLink> 
              </div>
              <div class="box" id="eight">
                <HashLink style={{ textDecoration: 'none' }} to="/grokking#trees">trees</HashLink> 
              </div>
              <div class="box" id="nine">
                <HashLink style={{ textDecoration: 'none' }} to="/grokking#heaps">heaps</HashLink> 
              </div>
              <div class="box" id="ten">
                <HashLink style={{ textDecoration: 'none' }} to="/grokking#backtracking">backtracking</HashLink> 
              </div>
              <div class="box" id="eleven">
                <HashLink style={{ textDecoration: 'none' }} to="/grokking#trees">modified binary search</HashLink> 
              </div>
            </div>
            <div id="arr" className="bullet">
            <Link style={{ textDecoration: 'none' }} to="/slidingwindow">sliding window</Link>  
            <h5>02 Aug 2022</h5>          
            <p>cha-cha slide through linear data structures</p>
            </div>
            <br/>
            <div id="pointers" className="bullet">
            <Link style={{ textDecoration: 'none' }} to="/twopointers">two pointers</Link>  
            <h5>25 Aug 2022</h5>          
            <p>two stepping data structures sorted in non-decreasing order</p>
            </div>
            <br/>
            <div id="pointers" className="bullet">
            <Link style={{ textDecoration: 'none' }} to="/fastslow">fast and slow pointers</Link>  
            <h5>01 Oct 2022</h5>          
            <p>the tortoise and the hare</p>
            </div>
            <br/>
            <div id="intervals" className="bullet">
            <Link style={{ textDecoration: 'none' }} to="/mergeintervals">merge intervals</Link>  
            <h5>02 Oct, 2022</h5>          
            <p>can i get a woot woot</p>
            </div>
            <br/>
            <div id="sort" className="bullet">
            <Link style={{ textDecoration: 'none' }} to="/cyclicsort">cyclic sort</Link>    
            <h5>03 Oct 2022</h5>        
            <p>the frugal man's sort</p>
            </div>
            <br/>
            <div id="sll" className="bullet">
            <Link style={{ textDecoration: 'none' }} to="/llreversal">in-place reversal of linked list</Link>    
            <h5>09 Oct 2022</h5>        
            <p>now you see me now you don't</p>
            </div>
            <br/>
            <div id="bfs" className="bullet">
            <Link style={{ textDecoration: 'none' }} to="/bfs">breadth-first search</Link>       
            <h5>21 Dec 2022</h5>     
            <p>levelling a traversal's order</p>
            </div>
            <br/>
            <div className="bullet">
            <Link style={{ textDecoration: 'none' }} to="/dfs">depth-first search</Link>    
            <h5>23 Dec 2022</h5>        
            <p>pre --> in --> post</p>
            </div>
            <br/>
            <div id="heaps" className="bullet">
            <Link style={{ textDecoration: 'none' }} to="/twoheaps">two heaps</Link>  
            <h5>30 Dec 2022</h5>          
            <p>hippidy hop</p>
            </div>
            <br/>
            <div id="backtracking" className="bullet">
            <Link style={{ textDecoration: 'none' }} to="/backtracking">backtracking</Link> 
            <h5>14 Jan 2023</h5>           
            <p>retracing our steps</p>
            </div>
            <br/>
            <div id="trees" className="bullet">
            <Link style={{ textDecoration: 'none' }} to="/binarysearch">modified binary search</Link>  
            <h5>19 Jan 2023</h5>          
            <p>marco.....polo</p>
            </div>
            <br/>
            <br/>
          </div>
        </div>
  </div>); 
}

function SlidingWindow() {
  ChangeTitle("sliding window")
  return ( <div><Menu/>
      <div className="article">
        <div className="articleDescripion">
        <br/>
        <br/>
        <h1>sliding window</h1>
        <p className="date">aug 2, 2022</p>
        <br/>
        <p><i>The sliding window technique applies to linear data structures like arrays, lists and strings. It improves the performance of algorithms trying to visit every substructure of an input. For any given window (contigous elements), there is an index that denotes the start of the window and an index that marks the end of the window. Typically using nested loops, O(n²), we’ll see how it can be optimized to O(n). Here are its three variations:</i></p>
        <ul className="listTitle">
        <li><h5>(1) Fixed Window Size</h5></li>
        <li><h5>(2) Dynamic Window Size</h5></li>
        <li><h5>(3) Dynamic Window Size + Auxiliary Structure</h5></li>
        </ul>
        <br/>
        <h4>Fixed Window Size</h4>
        <p>For some questions, typically “easy'', the windows (substructures) to be visited must be of a set size. Say we have a list:</p>
    <SyntaxHighlighter className="codeBlocks" language="python" style={xcode}>
      {`nums = [1, 2, 3, 4, 5, 6]`}
    </SyntaxHighlighter>
          <p>Now, lets say the fixed size is k = 3. How could we traverse <i>nums</i> for every window of length k?</p>
          <SyntaxHighlighter className="codeBlocks" 
          language={"python"}
          style={xcode}>{`#brue force O(n*k)
for i in range(len(nums)-k+1):
    for j in range(i, i + k):
        nums[j] #process window


#optimal O(n)
for i in range(k):
    nums[i] #process first k elements

for i in range(k, len(nums)):
    sum -= nums[i-k]
    sum += nums[i] 
    nums[i] #remove first, add new, then process`}</SyntaxHighlighter>
        <p>Which would process windows:</p>
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]`}</SyntaxHighlighter>
        <br/>
        <br/>
        <h4>Dynamic Window Size</h4>
        <p>For most problems however, you’ll work with a window that is dynamic. This means the answer could be a window of any size, so we need to be able to expand and contract it. When we might do either, depends on if the current window fufills a condition or not:</p>
        <SyntaxHighlighter className="codeBlocks"
          language={"python"}
          style={xcode}>{`#brute force O(n^2)
for i in range(len(nums)):
    for j in range(i+1, len(nums)):
        nums[i:j] #process every window

#O(n)
left = 0
for right in range(len(nums)):

    while (nums[left:right+1] fufills condition):
        left += 1
    else:
        #keep expanding`}</SyntaxHighlighter>
          <br/>
          <br/>
          <br/>
          <h4>Dynamic Window Size + Auxiliary Structure</h4>
          <p>Similar to above, these types of questions require our window to dynamically grow and shrink. However, it differs in the way that computation requires data storage possibly up to the length of the input - which is where our auxiliary structure comes into play.</p>
          <br/>
          <h4>When to use the Sliding Window?</h4>
          <ol className="listInfo">
          <li><p>When the input is an array, list or string</p></li>
          <li><p>When some keywords are used: maximum, minimum, longest, shortest, optimal, unique, distinct, contiguous, sub-array/string</p></li>
          <li><p>The brute force solution is O(n²)/has nested loops</p></li>
          </ol>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
  </div>); 
}

function TwoPointers() {
  ChangeTitle("two pointers")
  return ( <div><Menu/>
      <div className="article">
        <div className="articleDescripion">
        <br/>
        <br/>
        <h1>two pointers</h1>
        <p className="date">aug 25, 2022</p>
        <br/>
        <p><i>The two pointer technique applies to (often sorted) linear data structures like arrays, lists and strings. It improves the performance of algorithms trying to visit every possible pair in such inputs. For any pair, there is a left pointer denoting the first element and a right pointer identifying the second. Typically done in O(n²) time with nested loops, we'll see how such pairings can be improved to O(n) time.</i></p>
        <ul className="listTitle">
        <li><h5>(1) Brute Force Pairs</h5></li>
        <li><h5>(2) Two Pointers with Sorted Array</h5></li>
        <li><h5>(3) Two Pointers with Unsorted Array</h5></li>
        </ul>
        <br/>
        <h4>Brute Force Pairs</h4>
        <p>When given a question that requires processing pairs, there is a <i>naive</i> approach that applies to both sorted and unsorted arrays:</p>
        <SyntaxHighlighter className="codeBlocks" language={"python"}
          
          style={xcode}>{`nums = [1, 2, 3, 4, 5, 6] or nums = [5, 3, 2, 6, 1, 4]`}</SyntaxHighlighter>
        <p>Applied to either array, the algorithm below will process the same pairs, just in a different order. The cost, however, is O(n^2) time.</p>
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`#O(n^2)
for left in range(len(nums)):
    for right in range(left+1, len(nums)):
        #process pair nums[left]:nums[right]`}</SyntaxHighlighter>
          <br/>
          <br/>
          <br/>
        <h4>Two Pointers with Sorted Array</h4>
        <p>When given an array thats pre-sorted, we can be more strategic about its processing. Pointing at the head and tail, we can process the pair, and based on the combination, decide if we want to move the left or right pointer.</p>
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`#O(n)
left, right = 0, len(data) - 1
while left < right:
    
    if (condition fufilled):
        return [nums[left], nums[right]]
    elif (condition failed this way):
        left += 1
    else:
        right -= 1`}</SyntaxHighlighter>
          <br/>
          <br/>
          <h4>Two Pointers with Unsorted Array</h4>
          <p>There is no tecehnique to necessarily be applied here. Rather, we just need to sort the array we're working with before applying the two pointer technique. Seeing as the time complexity of the method is O(n) time, its best to use a sorting algorithm that runs in the same time to experience no complexity difference. I'll leave it to your imagination which can be applied here.</p>
        <br/>
        <br/>
        <h4>When to use Two Pointers?</h4>
          <ol className="listInfo">
          <li><p>When the given input is pre-sorted or must be sorted for solving.</p></li>
          <li><p>The set of elements in the array is a pair, triplet or subarray.</p></li>
          </ol>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
  </div>); 
}

function FastSlow() {
  ChangeTitle("fast and slow pointers")
  return ( <div><Menu/>
      <div className="article">
        <div className="articleDescripion">
        <br/>
        <br/>
        <h1>fast and slow pointers</h1>
        <p className="date">oct 1st, 2022</p>
        <br/>
        <p><i>The fast and slow pointer technique applies to arrays, lists but most often linked-lists. It improves the performance of algorithms determining if a input posesses a cycle or not. For every structure, we set two pointers to move at difference speeds (a tortoise and a hare). If there is no cycle, the fast pointer will reach the end of the input. However, if the fast pointer meets the slow pointer (laps), there is a cycle present.</i></p>
        <ul className="listTitle">
        <li><h5>(1) Floyd's Cycle-Finding Algorithm</h5></li>
        </ul>
        <br/>
        <h4>Floyd's Cycle-Finding Algorithm</h4>
        <p>The first thing to consider with this approach is what exactly it approves on. Say we have a singly linked-list:</p>
        <img width="400" height="200" src={sll0} alt='' />
        <p>The intuition for most naive cycle-detecting algorithms would be to store all elements visited and end the function if we visit any element already stored. This detects any cycle that might exist, but uses extra space by storing each element, and time checking if it already exists in storage before appending it.</p>
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`#O(n^2) time, O(n) space
arr = []
while head:

    if head in arr:
        return True
    else:
        arr.append(head)
        head = head.next
        
return False`}</SyntaxHighlighter>
        <p>Floyd's technique improves the time and space used by implementing two pointers which only store the elements they are currently at. This is where the slow pointer moves one step at a time and the fast pointer moves two steps at a time, eventually landing on the same element (if a cycle exists).</p>
        <br/>
        <img width="400" height="200" src={sll1} alt='' />
        <img width="400" height="200" src={sll2} alt='' />
        <img width="400" height="200" src={sll3} alt='' />
        <img width="400" height="200" src={sll4} alt='' />
        <br/>
        <p>Pictured above the slow (red) pointer and fast (green) pointer overlap or meet at the fourth node - thus a cycle is present.</p>
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`#O(n) time, O(1) space
slow, fast = head, head
while fast and fast.next:
    
    slow = slow.next
    fast = fast.next.next
    
    if slow == fast:
        return True  
    
return False`}</SyntaxHighlighter>
          <br/>
          <br/>
          <br/>
          <h4>When to use the Fast and Slow Pointers?</h4>
          <ol className="listInfo">
          <li><p>The problem works with a loop and has a linked-list or array as a input structure.</p></li>
          <li><p>When you need to know the position of a element relative to all other items in the input.</p></li>
          </ol>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
  </div>); 
}

function MergeIntervals() {
  ChangeTitle("merge intervals")
  return ( <div><Menu/>
      <div className="article">
        <div className="articleDescripion">
        <br/>
        <br/>
        <h1>merge intervals</h1>
        <p className="date">oct 2nd, 2022</p>
        <br/>
        <p><i>The merge intervals technique applies to inputs with multiple elements, and those elements have values that could be considered overlapping or intersecting with one another. By detecting such occurences, we're free to merge, insert or delete them when we choose.</i></p>
        <ul className="listTitle">
        <li><h5>(1) Overlapping Unsorted Intervals</h5></li>
        <li><h5>(2) Overlapping Sorted Intervals</h5></li>
        </ul>
        <br/>
        <h4>Overlapping Unsorted Intervals</h4>
        <p>An easy way to grasp what intervals are is by viewing their values as meeting times. Say interval A and B are meetings, both set some time between 12:00 a.m. and 12:00 p.m. For these two meeting times, there are six ways they can relate to each other:</p>
        <br/>
        <img src={intervals} alt='' />
        <br/>
        <br/>
        <br/>
        <p>Illustrated above, there are four ways (figure 2-5) that any two given intervals can overlap. Notice a pattern? For any overlap, the start of A is always less than or equal to the end of B, and the start of B is always less than or equal to the end of A. Say we have the following intervals: </p>
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`intervals = [(5,10),(0,30),(15,20)]`}</SyntaxHighlighter>
        <p>Traversing every combination of interval, we can find which overlap:</p>
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`#O(n^2) time
for i in range(len(intervals)):
    for j in range(i+1, len(intervals)):

        if intervals[i].start <= intervals[j].end and intervals[j].start <= intervals[i].end:
            return False

return True`}</SyntaxHighlighter>
        <br/>
        <br/>
        <br/>
        <h4>Overlapping Sorted Intervals</h4>
        <p>Looking at the function above, there is a way to improve the performance of checking for overlaps. If our list of intervals were sorted in non-decreasing order, vis-à-vis their start values, we'd only need to check if each intervals end value is greater or equal to what's next to it. This would allow us to drop the second loop:</p>
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`#O(n log n) time
intervals.sort(key = lambda i: i.start)
for i in range(len(intervals)-1):

  if intervals[i].end >= intervals[i+1].start:
      return False

return True`}</SyntaxHighlighter>
          <br/>
          <br/>
          <br/>
          <h4>When to use the Merge Intervals?</h4>
          <ol className="listInfo">
          <li><p>If the requested result requires mutually exclusive intervals</p></li>
          <li><p>If the keywords "overlapping" or "intersecting" intervals are used</p></li>
          </ol>
          </div>
          <br/>
          <br/>
          <br/>
      </div>
  </div>); 
}

function CyclicSort() {
  ChangeTitle("cyclic sort")
  return ( <div><Menu/>
      <div className="article">
        <div className="articleDescripion">
          <br/>
          <br/>
          <h1>cyclic sort</h1>
          <p className="date">oct 3rd, 2022</p>
          <br/>
          <p><i>This cyclic sort is exactly what it sounds like - a sorting algorithm. Its only prerequisite is an input array containing numbers in a defined range, typically [0, n] or [1, n]. It iterates over each number, and if the current number you are visiting is at the wrong index (sorted in non-decreasing order), you swap it with the number at its correct index. After this, any element placed at the incorrct index can be assessed.</i></p>
          <ul className="listTitle">
            <li><h5>(1) Range of [0, n]</h5></li>
            <li><h5>(2) Range of [1, n]</h5></li>
          </ul>
          <br/>
          <h4>Range of [0, n]</h4>
          <p>First, let's visualize the input we're working with:</p>
          <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]`}</SyntaxHighlighter>
          <p>Now, for each number at the wrong index, let's swap it with the number that is currently stored in it.</p>
          <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`i = 0
while i < len(nums):

    num = nums[i]

    if num < len(nums) and num != i:
        nums[num], nums[i] = num, nums[num]
    else:
        i += 1`}</SyntaxHighlighter>
        <p>The resulting array from this would be:</p>
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`nums = [0, 1, 2, 3, 4, 5, 6, 7, 9]`}</SyntaxHighlighter>
        <p>We can now attempt to fufill any particularities posed by the question.</p>
        <br/>
        <br/>
        <br/>
        <h4>Range of [1, n]</h4>
          <p>Once again, let's define the input we're processing:</p>
          <br/>
          <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`nums = [7,6,4,2,3,5,7,1]`}</SyntaxHighlighter>
          <p>Now, for each number at the wrong index, let's swap it with the number that is currently stored in it.</p>
          <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`i = 0
while i < len(nums):

    num = nums[i]

    if nums[i] != (i+1) and nums[num-1] != num:
        nums[num-1], nums[i] = num, nums[num-1]

    else:
        i += 1`}</SyntaxHighlighter>
        <p>The resulting array from this would be:</p>
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`nums = [1, 2, 3, 4, 5, 6, 7, 7]`}</SyntaxHighlighter>
        <p>We can now attempt to fufill any particularities posed by the question.</p>
        <br/>
        <br/>
        <h4>When to use Cyclic Sort?</h4>
          <ol className="listInfo">
          <li><p>They will be problems involving a sorted array with numbers in a given range</p></li>
          <li><p>If the problem asks you to find the missing/duplicate/smallest number in an sorted/rotated array</p></li>
          </ol>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
  </div>); 
}

function LinkListReversal() {
  ChangeTitle("in-place reversal of linked list")
  return ( <div><Menu/>
      <div className="article">
        <div className="articleDescripion">
          <br/>
          <br/>
          <h1>in-place reversal of linked list</h1>
          <p className="date">oct 9th, 2022</p>
          <br/>
          <p><i>The in-place reversal of a linked list is a technique to, you guessed it, reverse a linked list. Typical naive approaches would do this by storing the elements then reversing them, using O(n) memory. This algorithm does it, “in-place”, which optimizes memory used to O(1).</i></p>
          <ul className="listTitle">
            <li><h5>(1) In-place Reversal of Linked List</h5></li>
          </ul>
          <br/>
          <h4>In-place Reversal of Linked List</h4>
          <p>Before exploring how we can use O(1) memory to reverse a linked list, we should see what is actually being imporved upon by describing the brute-force solution first.</p>
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`#O(n) time, O(n) space
curr, nodes = head, []
while curr:
    nodes.append(curr)
    curr = curr.next

nodes.reverse()

for i in range(len(nodes)-1):
    nodes[i].next = nodes[i+1]
nodes[len(nodes)-1].next = None

return nodes[0]`}</SyntaxHighlighter>
          <p>As displayed above, the storage of each node in the linked list is what makes the solution expensive. If we coud, instead, reverse each node while we're visiting it, there would be no need to store it.</p>
          <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`#O(n) time, O(1) space
prev = None
while head:
    
    next = head.next
    head.next = prev
    prev = head
    head = next
    
return prev`}</SyntaxHighlighter>
          <br/>
          <br/>
          <h4>When to use In-place Reversal of Linked List?</h4>
          <ol className="listInfo">
          <li><p>If you’re asked to reverse a linked list without using extra memory</p></li>
          </ol>
          <br/>
          <br/>
        </div>
      </div>
  </div>); 
}

function BFS() {
  ChangeTitle("breadth-first search")
  return ( <div><Menu/>
      <div className="article">
        <div className="articleDescripion">
        <br/>
        <br/>
        <h1>breadth-first search</h1>
        <p className="date">dec 21, 2022</p>
        <br/>
        <p><i>Breadth-first search is an algorithm that searches a tree structure for a node or subtree that fufills some quality. The characteristic that seperates it from other traversals is that it completely visits each level (from left to right, hence the word "breadth") before proceeding to the level below.</i></p>
        <ul className="listTitle">
        <li><h5>(1) Binary Tree BFS</h5></li>
        </ul>
        <br/>
        <h4>Binary Tree BFS</h4>
        <p>The best way to understand such a search is with a "perfect binary tree" as each level is wider than the last. Lets define its class:</p>
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`class Node:
  def __init__(self, val, left = None, right = None):
    self.left = left
    self.right = right
    self.val = val`}</SyntaxHighlighter>
        <p>Now, a illustration of its instantiation:</p>
        <img alt="cant display" height={346} width={461} src={bt}/>
        <p>Notice anything interesting? The numbering of the nodes are actually the order theyre visited in with BFS. What happens is at whatever level we're currently sitting at, we iterate each through each node, process it, and then store is children in memory (a queue).</p>
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`#time complexity is O(n), space complexity O(n)
def iterative_bfs(root):

 if not root:
     return

 queue = [root]

 while queue:
     
     cur_node = queue.pop(0)

     #process node
     print(cur_node.val)
     
     if cur_node.left:
         queue.append(cur_node.left)

     if cur_node.right:
         queue.append(cur_node.right)`}</SyntaxHighlighter>
         <p>The time complexity here is quite straight forward - since we visit every node, time will grow linearly, O(n). What might be more elusive is how the space complexity is also O(n). Since at each level we store all nodes children in memory, intuitively, the space complexity would be the greatest-width of the tree, O(w). However, it is the case that some trees max-width is actually equal to their number of nodes. An example is perfect binary trees, where max-width is equal to n/2, which becomes O(n).</p>
        <br/>
        <h4>When to use Breadth-first Search?</h4>
          <ol className="listInfo">
          <li><p>When asked to traverse a binary tree</p></li>
          <li><p>It is advantageous to search a tree structure level by level</p></li>
          </ol>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
  </div>); 

}

function DFS() {
  ChangeTitle("depth-first search")
  return ( <div><Menu/>
      <div className="article">
        <div className="articleDescripion">
        <br/>
        <br/>
        <h1>depth-first search</h1>
        <p className="date">dec 23, 2022</p>
        <br/>
        <p><i>Depth-first search is an algorithm that searches a tree structure for a node or subtree that fufills some quality. The characteristic that seperates it from other traversals is that it visits the bottom of each branch (hence the word "depth") before backtracking. Doing so, there are different said subtree could be visited: pre-order, in-order or post-order.</i></p>
        <ul className="listTitle">
        <li><h5>(1) Pre-Order, In-Order and Post-Order</h5></li>
        <li><h5>(2) Iterative DFS</h5></li>
        </ul>
        <br/>
        <h4>Pre-Order, In-Order and Post-Order</h4>
        <p>First, lets define our tree structure:</p>
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`class Node:
  def __init__(self, val, left = None, right = None):
    self.left = left
    self.right = right
    self.val = val`}</SyntaxHighlighter>
    <p>Now, a illustration of its instantiation:</p>
    <img alt="cant display" src={treeTraversal} width={"512"} height={"437"}></img>
    <p>Above we can see each color representing a different traversal (red: pre-order, green: in-order, blue: post-order). All however follow the same heuristic - go as deep as possible before backtracking. Now lets write them out:</p>
    <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`def pre_order(root):                def in_order(root):                   def post_order(root):

    if not root:                      if not root:                          if not root:                   
      return                            return                                return                                                                      
                                                                             
    print(root.val)                   self.in_order(root.left)              self.post_order(root.left)
    self.pre_order(root.left)         print(root.val)                       self.post_order(root.right)           
    self.pre_order(root.right)        self.in_order(root.right)             print(root.val)`}</SyntaxHighlighter>
    <p>Since every node is visited, time will grow linearly with input, making it O(n). For space complexity it might not be as obvious why its O(n). Recursively traverse our tree, the memory used is for functions being placed in the call stack. Since DFS explores the deepest part of every branch, at most we'll store the height of the tree, O(h). This however becomes O(n), as in the worst case we can have trees with a single node, or only left children (imagine only nodes F, B, A existed above).</p>
    <br/>
        <h4>Iterative DFS</h4>
        <p>Something to be explored is the fact that all discussed traversals are done recursively. Implicitly, this means a stack data structure is used. If you wanted to use a stack explicitly however, you'd be best off performing DFS iteratively.</p>
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`#O(n) time, O(n) space
def dfs_iterative(root):

  if not root:
      return

  stack = [root]

  while stack:

      #process node
      node = stack.pop()
      print(node.val)
      
      if node.right:
          stack.append(node.right)
      
      if node.left:
          stack.append(node.left)`}</SyntaxHighlighter>
        <br/>
        <h4>When to use Depth-first Search?</h4>
          <ol className="listInfo">
          <li><p>When asked to traverse a binary tree</p></li>
          <li><p>It is advantageous to search a tree structure deeply</p></li>
          </ol>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
  </div>); 
}

function TwoHeaps() {
  ChangeTitle("two heaps")
  return ( <div><Menu/>
      <div className="article">
        <div className="articleDescripion">
        <br/>
        <br/>
        <h1>two heaps</h1>
        <p className="date">dec 30, 2022</p>
        <br/>
        <p><i>A heap is a tree like data structure that is represented by an array and implements a priority queue. Its indicies implicitly denote parent-child relationships, and those elements placement are based on if the heap is ordered with a minimum or maximum value priority. This rule is why heaps are special: their min or max value can be accessed in O(1) time. The two-heap pattern is when we use two min heaps, two max heaps, or a mix to solve some problem.</i></p>
        <ul className="listTitle">
        <li><h5>(1) Finding a Stream's Median</h5></li>
        </ul>
        <br/>
        <h4>Finding a Stream's Median</h4>
        <p>The median is the middle number in a sorted list of numbers. Naturally, middle indicies only exist when we have a odd length of values, so for even length lists, the median is the average of the middle two numbers.</p>
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`odd_length_stream = [1, 2, 3, 4, 5] --> #median is 3

even_length_stream = [1, 2, 3, 4, 5, 6] --> #median is (3 + 4) / 2 = 3.5`}</SyntaxHighlighter>
          <p>So how would two heaps help with this? Well imagine you were trying to find the median of a millions of numbers. With a regular list you would have to go through every element. Now, how would that time complexity change if our sorted list above was split in two, one in minimum and the other in maximum order?</p>
<SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`max_heap = [3, 2, 1] and min_heap = [4, 5, 6] # --> (max_heap[0] +  min_heap[0]) / 2 = 3.5`}</SyntaxHighlighter>
<p>Notice anything? If we pop the head (max value) from max_heap, and pop the head (min value) from the min_heap, we retreive 3 and 4, the same values if it were a single list. The difference is we didnt have to scan the entire data stream, just pop(), giving us O(1) time. </p>
<br/>
<p>That was the median with an even total number of values. What if it were odd? We just pop() the head of the heap with a odd number of values.</p>
<SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`max_heap = [2, 1] and min_heap = [3, 4, 5]

#odd length heap has median value
if len(max_heap) % 2 == 0:
  return min_heap[0]

else:
  return max_heap[0]`}</SyntaxHighlighter>
  <br/>
<h4>When to use Two Heaps?</h4>
          <ol className="listInfo">
          <li><p>If we must find the smallest, larges or median value of a data stream</p></li>
          </ol>
          </div>
        <br/>
        <br/>
        <br/>
      </div>
  </div>); 
  
}

function Backtracking() {
  ChangeTitle("backtracking")
  return ( <div><Menu/>
      <div className="article">
        <div className="articleDescripion">
        <br/>
        <br/>
        <h1>backtracking</h1>
        <p className="date">jan 14, 2023</p>
        <br/>
        <p><i>Backtracking is a technique for finding some collection (usually a subset, combination or permutation) given some input. Its title is given because we incrementally add, then remove (“backtrack”) elements, based on whatever our goal is. Typically this algorithm is applied recursively and with depth-first search order.</i></p>
        <ul className="listTitle">
        <li><h5>(1) Subsets, Combinations and Permutations</h5></li>
        <li><h5>(2) Combinations with a distinct and duplicate list</h5></li>
        <li><h5>(3) Permutations with a distinct and duplicate list</h5></li>
        </ul>
        <br/>
        <h4>Subsets, Combinations and Permutations</h4>
        <p>A set is a data structure holding a collection of elements, set = {'{1, 2, 3}'}. A subset is any combination of elements from that set, say {'{2, 3}'} or {'{1}'}. When trying to count all subsets for some set, there are some less obvious cases to remember - the empty set, {'{ }'} and the initial set itself, {'{1, 2, 3}'}.</p>
        <p>So whats different between a subset and a combination? Something subtle: all subsets can be considered combinations, but not all combinations are considered subsets. An example is a combination where repetition is allowed, {'{1, 2, 2}'} or {'{3, 3, 3}'}. The set data structure does not allow such duplication.</p>
        <p>Easy right? Well now we can look at Permutations. A Permutation is just a combination that cares about order. When looking at {'{2, 3, 1}'} and {'{1, 3, 2}'}, we'd consider them the same combination, but when looking at them as permutations, meaning considering order, they are different.</p>
        <br/>
        <h4>Combinations with a distinct and duplicate list</h4>
        <p>Say we have a list of elements, nums = [1, 2, 3], and we want to find all the combinations without repeating any elements. That means at each element we have two choices: (1) add the element to the current array or (2) do not add it. Since both could lead to valid combinations, we can make two distinct lists with recursive calls. Producing [1] and [ ], we go to the next index and perform the same rule. This time however, it’s performed for all previously created arrays.</p>
        <img width="588" height="308" src={backtrack} alt='' />
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`combinations = []
def backtrack_combinations(self, nums, curr_combo, count):

  if count == len(nums):
    combinations.append(curr_combo[:])
    return


  curr_combo.append(nums[count])
  self.backtrack_combinations(nums, curr_combo, count+1)
  curr_combo.pop()
  self.backtrack_combinations(nums, curr_combo, count+1)`}</SyntaxHighlighter>
  <p>So that’s a scenario when every element in our input is unique. What happens if we were to follow the same rule with a list containing duplicates?</p>
        <img width="580" height="240" src={backtrack1} alt='' />
        <p>What we can see here is that when given duplicates in our array we end up storing duplicate subsets also. So, the question is, how can we skip such routes in our decision tree? The answer is after sorting our duplicate list, we can then, during each “backtrack”, check if the next element is the same as the element last processed. If so, we can skip it, which skips visiting a duplicate route.</p>
        <img width="600" height="288" src={backtrack2} alt='' />
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`subsets = []
nums.sort()
def backtrack_combinations(self, nums, curr_subset, count):
    
    if count == len(nums):
        subsets.append(curr_subset[:])
        return
        
    
    curr_subset.append(nums[count])
    self.backtrack_combinations(nums, curr_subset, count + 1)
    curr_subset.pop()
    
    while count + 1 < len(nums) and nums[count] == nums[count + 1]:
        count += 1
    
    self.backtrack_combinations(nums, curr_subset, count + 1)`}</SyntaxHighlighter>
       <p>There is a final case to consider when it comes to combinations - when repetition is allowed. Whats new here is we stay at the same index until a backtrack is reached, and from there we visit the element next in our array.</p>
       <img width="560" height="350" src={backtrack4} alt='' />
       <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`combinations = []
def backtrack_combinations(self, nums, target, curr_combo, count):

  if count == len(nums):
      combinations.append(curr_combo[:])
      return


  curr_combo.append(nums[count])
  backtrack_combinations(nums, target, curr_combo, count)
  curr_combo.pop()
  backtrack_combinations(nums, target, curr_combo, count + 1)`}</SyntaxHighlighter>
        <br/>
        <br/>
        <h4>Permutations with a distinct and duplicate list</h4>
        <p>Following the same logic as above, we can apply the backtracking rule to finding all permutations. The only difference is that instead of backtracking to visit branches without our current element, we backtrack to visit every other element remaining in our initial array.</p>
        <img width="512" height="352" src={backtrack3} alt='' />
        <SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`permutations = []
def backtrack_permutations(self, nums, curr_perm):

  if not nums:                      
      permutations.append(curr_perm[:])           
      return

  for i in range(len(nums)):
      curr_perm.append(nums[i])
      self.backtrack_permutations(nums[:i] + nums[i+1:], curr_perm)                
      curr_perm.pop()`}</SyntaxHighlighter>

<p>As we can see its very similar to the combinations procedure. So much so that when a duplicate input is given, we handle it in the same way:</p>
<SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`permutations = []
nums.sort()
def backtrack_permutations(self, nums, curr_per):
    
    if not nums:
      permutations.append(curr_per[:])
    
    for i in range(len(nums)):
        
        if i > 0 and nums[i-1] == nums[i]:
            continue
        
        curr_per.append(nums[i])
        self.backtrack_permutations(nums[:i] + nums[i+1:], curr_per)
        curr_per.pop()`}</SyntaxHighlighter>
<br/>
<br/>
<br/>
<h4>When to use Backtracking?</h4>
          <ol className="listInfo">
          <li><p>When asked to find all subsets, combinations or permutations</p></li>
          </ol>
          </div>
        <br/>
        <br/>
        <br/>
      </div>
  </div>); 
  
}



function BinarySearch() {
  ChangeTitle("modified binary search")
  return ( <div><Menu/>
      <div className="article">
        <div className="articleDescripion">
        <br/>
        <br/>
        <h1>modified binary search</h1>
        <p className="date">jan 19, 2023</p>
        <br/>
        <p><i>The binary search is a divide and conquer algorithm for finding some target in an array. Applied to sorted arrays, it uses said status to reduce our search space by half each iteration, instead of checking every element, to improve time complexity from O(n) to O(log n).</i></p>
        <ul className="listTitle">
        <li><h5>(1) Binary Search</h5></li>
        <li><h5>(2) Modified Binary Search</h5></li>
        </ul>
        <br/>
        <h4>Binary Search</h4>
        <p>The binary search algorithm begins by creating three pointers for our sorted list. A left pointer at the first index, a right pointer at the last index, and a middle pointer for the middle index (for even length lists we select the two middle indexes then point to the leftmost).</p>
        <br/>
        <img width="480" height="396" src={bs1} alt='' />
        <p>Those are cases when the target exists in the array. When he target doesn’t exist, but min(arr) {'< target < max(arr)'},
the right pointer ends at the greatest value less than target and the left pointer ends at the smallest value greater than target.</p>
<br/>
<img width="205" height="446" src={bs2} alt='' />
<br/>
<SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`#time complexity is O(log n)
#space complexity is O(1)
def binary_search(self, nums, target):
            
  left, right = 0, len(nums)-1
  while left <= right:
      
      middle = (left + right) // 2
      
      if target < nums[middle]:
          right = middle - 1
      
      elif target > nums[middle]:
          left = middle + 1
          
      else:
          return middle
  
  return None `}</SyntaxHighlighter>
  <br/>
    <h4>Modified Binary Search</h4>
    <p>The modified binary search is the binary search, tweaked, to work on "rotated" sorted array’s. An array has been rotated when an element from the front is added to the back. [1, 2, 3, 4] --> [2, 3, 4, 1]. If the number of rotations is equal to its length of nums, our array remains the same.</p>
    <p>So if we want to find a target in a rotated sorted array, we use the middle pointer to check which side is sorted [left, middle] or [middle, right], then if our target is in that sorted partition. If it is, we enclose the pointers so that is our new search space, if not, we enclose the other partition.</p>
    <br/>
    <img width="222" height="496" src={bs4} alt='' />
    <br/>
<SyntaxHighlighter className="codeBlocks" language={"python"} style={xcode}>{`#time complexity is O(log n)
#space complexity is O(1)
def binary_search(self, nums, target):
    
    left, right = 0, len(nums) - 1
    
    while left <= right:
        
        middle = (left + right) // 2
        
        if target == nums[middle]:
            return middle
        

        #left side is sorted
        elif nums[left] <= nums[middle]:
            
            if target >= nums[left] and target < nums[middle]:
                right = middle - 1
            else:
                left = middle + 1
            
            
        #right side is sorted
        else:
            if  target > nums[middle] and target <= nums[right]:
                left = middle + 1
            else:
                right = middle - 1
    
    return None `}</SyntaxHighlighter>
    <p> An important note here is that for each element in a sorted array, {'nums[i - 1] < nums[i]'}. In a rotated array, where {'nums[i-1] > nums[i]'}, we have found our inflection point (where rotation begins). Say we have an array, [0, 1, 2, 4, 5, 6, 7]:</p>
    <br/>
    <img width="543" height="308" src={bs3} alt='' />
    <br/>
    <br/>
    <br/>
    <h4>When to use Binary Search?</h4>
          <ol className="listInfo">
          <li><p>When we need to search a sorted list</p></li>
          </ol>
          <br/>
          <br/>
      </div>
      </div>
  </div>); 
  
}
export default App;