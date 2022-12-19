import React, { useEffect } from "react";
import "./App.css";
import nathan from "./nathan.jpg";
import github from "./githubGrey.png";
import github2 from "./github2.png";
import linkedin from "./linkedinGrey.png";
import linkedin2 from "./linkedin2.png";
import chart from "./chart.svg";
import sll0 from "./sll0.png";
import sll1 from "./sll1.png";
import sll2 from "./sll2.png";
import sll3 from "./sll3.png";
import sll4 from "./sll4.png";
import intervals from "./intervals.png";
import { Route, Link, Routes } from "react-router-dom";
import { Code, tomorrow } from "react-code-blocks";
import Menu from "./Menu.js"


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
      <div className="about">
            <div className="aboutPhoto">
              <img alt="cant show" src={nathan}></img>
            </div>
            <div className="aboutText">
              <h1>about</h1>
              <p> Public policy junkie and software engineer. I enjoy turning elusive business requirements into performant, scalable code. Currently I do just that at Canada's{" "} <a href="https://www.bankofcanada.ca/core-functions/"> central bank.</a><br /><br /> When I'm not developing I like to lift,{" "} <a href="http://www.rosenfels.org/Joseph%20Campbell%20-%20The%20Hero%20With%20A%20Thousand%20Faces,%20Commemorative%20Edition%20%282004%29.pdf"> read</a> {""} and frequent comedy clubs. Feel free to check out my latest project, a COVID-19 relief initiative:{" "} <a href="https://dekiottawa.com"> Deki Ottawa.</a></p>
              <div>
                <a href="https://www.linkedin.com/in/nathanembaye/">
                  <img onMouseOver={e => e.currentTarget.src = linkedin2} onMouseLeave={e => e.currentTarget.src = linkedin} alt='' className="linkedin" src={linkedin} />
                </a>
                <a href="https://github.com/nathanembaye">
                  <img onMouseOver={e => e.currentTarget.src = github2} onMouseLeave={e => e.currentTarget.src = github} alt='' className="github" src={github} />
                </a>
              </div>
            </div>
        </div>
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
            <h1>notes</h1>
            <p className="date">dec 6, 2022</p>
            <br/> 
            <br/> 
            <Link to="/complexity">computational complexity</Link>           
            <p>a fancy way of asking: how much work is it to run this algorithm?</p>
            <Link to="/grokking">grokking</Link>           
            <p>annoying</p>
            <Link to="/miscellania">miscellania</Link>           
            <p>post-it worthy essay's i’ve come across in 2022</p>
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
        <p>Instead, time complexity describes how long an algorithm will take to execute with changes in its input size. In other words, how the execution time will increase or decrease based on how big or small the input data is. Why an algorithm's lifetime time could differ given a new input length is because it could change the number of operations being performed.</p>
        <h5>constant time - O(1)</h5>
        <p>An algorithm is said to have constant time, O(1), when how many operations it performs is independent of input length. Simply -- it completes the same number of tasks no matter input size.</p>
        <h5>logarithmic time - (log n)</h5>
        <p>An algorithm is said to have logarithmic time, O(log n), when it begins processing input at its initial length but divides said data by a constant (usually two) each iteration until its less or equal to 1. This is most commonly seen with binary search trees.</p>
        <h5>linear time - O(n)</h5>
        <p>An algorithm is said to have linear time, O(n), when how long it takes to execute increases proportionally (1 to 1) with its input length. This occurs in cases when we have input data that needs to have every value inside it processed, and each of those assessments take constant time, O(1). This growth can be understood as <i>cn</i>, where <i>c = 1</i> and  <i>n = input length</i>.</p>
        <h5>quadratic time - (n<sup>2</sup>)</h5>
        <p>An algorithm is said to have quadratic time, O(n<sup>2</sup>), when the execution time increases proportionally to the squared size of the input length. This occurs in cases when we have input data that needs to have every value inside it processed, but each of those assessments must process the entire length of the original input data with it. These types of algorithms are most commonly seen with nested for loops.</p>
        <br/>
        <br/>
        <h3>space complexity</h3>
        <p>The space complexity of an algorithm is the amount of memory it requires to execute completely. It’s sum is <i>space complexity = auxiliary space + input space.</i></p>
        <p>Auxiliary space is defined as all the memory used inside the algorithm itself (think variables, loops, data structures, etc.), while input space is the memory used for the data that goes into the algorithm for processing. Differentiating that, when comparing different algorithms' space complexity, we would only consider auxiliary space since they’re solutions accepting the same input.</p>
        <p>Similar to time complexity, space complexity measures the storage needed relative to changes in the size of input data. That is, how the storage used during execution time increases or decreases based on how big or small the input data is.</p>
        <h5>constant space - O(1)</h5>
        <p>An algorithm is said to use constant space when the amount of memory used each execution remains the same, no matter the size of the input. A telltale of this is when only booleans and integers are ever stored.</p> 
        <h5>linear space - O(n)</h5>
        <p>An algorithm is said to use linear space when the amount of memory used for an execution, could take up to the length of the given input. A giveaway for this is the requirement of a linear data structure, like list or a hash table.</p>         
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
            <br/>
            <br/>
            <h1>grokking</h1>
            <p className="date">aug 1, 2022</p>
            <br/> 
            <br/> 
            <Link to="/slidingwindow"><i>Sliding Window</i></Link>           
            <p>cha-cha slide through linear data structures</p>
            <Link to="/twopointers"><i>Two Pointers</i></Link>           
            <p>two stepping data structures sorted in non-decreasing order</p>
            <Link to="/fastslow"><i>Fast and Slow Pointers</i></Link>           
            <p>the tortoise and the hare</p>
            <Link to="/mergeintervals"><i>Merge Intervals</i></Link>           
            <p>can i get a woot woot</p>
            <Link to="/cyclicsort"><i>Cyclic Sort</i></Link>           
            <p>the frugal man's sort</p>
            <Link to="/llreversal"><i>In-place Reversal of Linked List</i></Link>           
            <p>now you see me now you don't</p>
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
        <Code
          text={`nums = [1, 2, 3, 4, 5, 6]`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
          <p>Now, lets say the fixed size is k = 3. How could we traverse <i>nums</i> for every window of length k?</p>
          <Code
          text={`#brue force O(n*k)
for i in range(len(nums)-k+1):
    for j in range(i, i + k):
        nums[j] #process window


#optimal O(n)
for i in range(k):
    nums[i] #process first k elements

for i in range(k, len(nums)):
    sum -= nums[i-k]
    sum += nums[i] 
    nums[i] #remove first, add new, then process
        `}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
        <p>Which would process windows:</p>
        <Code
          text={`[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
        <br/>
        <br/>
        <br/>
        <h4>Dynamic Window Size</h4>
        <p>For most problems however, you’ll work with a window that is dynamic. This means the answer could be a window of any size, so we need to be able to expand and contract it. When we might do either, depends on if the current window fufills a condition or not:</p>
        <Code
          text={`
#brute force O(n^2)
for i in range(len(nums)):
    for j in range(i+1, len(nums)):
        nums[i:j] #process every window

#O(n)
left = 0
for right in range(len(nums)):

    while (nums[left:right+1] fufills condition):
        left += 1
    else:
        #keep expanding`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
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
        <Code
          text={`nums = [1, 2, 3, 4, 5, 6] or nums = [5, 3, 2, 6, 1, 4]`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
        <p>Applied to either array, the algorithm below will process the same pairs, just in a different order. The cost, however, is O(n^2) time.</p>
        <Code
          text={`#O(n^2)
for left in range(len(nums)):
    for right in range(left+1, len(nums)):
        #process pair nums[left]:nums[right]`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
          <br/>
          <br/>
          <br/>
        <h4>Two Pointers with Sorted Array</h4>
        <p>When given an array thats pre-sorted, we can be more strategic about its processing. Pointing at the head and tail, we can process the pair, and based on the combination, decide if we want to move the left or right pointer.</p>
        <Code
          text={`#O(n)
left, right = 0, len(data) - 1
while left < right:
    
    if (condition fufilled):
        return [nums[left], nums[right]]
    elif (condition failed this way):
        left += 1
    else:
        right -= 1`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
          <br/>
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
        <Code
          text={`#O(n^2) time, O(n) space
arr = []
while head:

    if head in arr:
        return True
    else:
        arr.append(head)
        head = head.next
        
return False`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
        <p>Floyd's technique improves the time and space used by implementing two pointers which only store the elements they are currently at. This is where the slow pointer moves one step at a time and the fast pointer moves two steps at a time, eventually landing on the same element (if a cycle exists).</p>
        <br/>
        <img width="400" height="200" src={sll1} alt='' />
        <img width="400" height="200" src={sll2} alt='' />
        <img width="400" height="200" src={sll3} alt='' />
        <img width="400" height="200" src={sll4} alt='' />
        <br/>
        <p>Pictured above the slow (red) pointer and fast (green) pointer overlap or meet at the fourth node - thus a cycle is present.</p>
        <Code
          text={`#O(n) time, O(1) space
slow, fast = head, head
while fast and fast.next:
    
    slow = slow.next
    fast = fast.next.next
    
    if slow == fast:
        return True  
    
return False`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
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
        <br/>
        <Code
          text={`intervals = [(5,10),(0,30),(15,20)]`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
        <br/>
        <br/>
        <p>Traversing every combination of interval, we can find which overlap:</p>
        <br/>
        <Code
          text={`#O(n^2) time
for i in range(len(intervals)):
    for j in range(i+1, len(intervals)):

        if intervals[i].start <= intervals[j].end and intervals[j].start <= intervals[i].end:
            return False

return True`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
        <br/>
        <br/>
        <br/>
        <h4>Overlapping Sorted Intervals</h4>
        <p>Looking at the function above, there is a way to improve the performance of checking for overlaps. If our list of intervals were sorted in non-decreasing order, vis-à-vis their start values, we'd only need to check if each intervals end value is greater or equal to what's next to it. This would allow us to drop the second loop:</p>
        <br/>
        <Code
          text={`#O(n log n) time
intervals.sort(key = lambda i: i.start)
for i in range(len(intervals)-1):
  if intervals[i].end >= intervals[i+1].start:
      return False

return True`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
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
          <br/>
          <Code
          text={`nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
          <br/>
          <br/>
          <p>Now, for each number at the wrong index, let's swap it with the number that is currently stored in it.</p>
          <br/>
          <Code
          text={`i = 0
while i < len(nums):

    num = nums[i]

    if num < len(nums) and num != i:
        nums[num], nums[i] = num, nums[num]
    else:
        i += 1`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
        <br/>
        <br/>
        <p>The resulting array from this would be:</p>
        <br/>
        <Code
          text={`nums = [0, 1, 2, 3, 4, 5, 6, 7, 9]`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
        <br/>
        <br/>
        <p>We can now attempt to fufill any particularities posed by the question.</p>
        <br/>
        <br/>
        <br/>
        <h4>Range of [1, n]</h4>
          <p>Once again, let's define the input we're processing:</p>
          <br/>
          <Code
          text={`nums = [7,6,4,2,3,5,7,1]`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
          <br/>
          <br/>
          <p>Now, for each number at the wrong index, let's swap it with the number that is currently stored in it.</p>
          <br/>
          <Code
          text={`i = 0
while i < len(nums):

    num = nums[i]

    if nums[i] != (i+1) and nums[num-1] != num:
        nums[num-1], nums[i] = num, nums[num-1]

    else:
        i += 1`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
        <br/>
        <br/>
        <p>The resulting array from this would be:</p>
        <br/>
        <Code
          text={`nums = [1, 2, 3, 4, 5, 6, 7, 7]`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
        <br/>
        <br/>
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
          <br/>
        <Code
          text={`#O(n) time, O(n) space
curr, nodes = head, []
while curr:
    nodes.append(curr)
    curr = curr.next

nodes.reverse()

for i in range(len(nodes)-1):
    nodes[i].next = nodes[i+1]
nodes[len(nodes)-1].next = None

return nodes[0]`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
          <br/>
          <br/>
          <p>As displayed above, the storage of each node in the linked list is what makes the solution expesive. If we coud, instead, reverse each node while we're visiting it, there would be no need to store it.</p>
          <br/>
          <br/>
          <Code
          text={`#O(n) time, O(1) space
prev = None
while head:
    
    next = head.next
    head.next = prev
    prev = head
    head = next
    
return prev`}
          language={"python"}
          showLineNumbers={false}
          theme={tomorrow}/>
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

export default App;