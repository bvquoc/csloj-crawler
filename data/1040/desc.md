**<center>NGUỒN: VOI Training Camp 3H  (Ngày 01/11/2016 Am)</center>**
<br>

Một mê cung có dạng một cây nhị phân đầy đủ có độ sâu $h$. Các nút của cây được đánh số theo qui tắc:
- Gốc của cây được đánh số $1$
- Với một nút trong $i$ $\left(i≤2^{h-1}-1\right)$ thì con trái của nó được đánh số là $2i$ và con phải của nó được đánh số là $2i+1$
(độ sâu của một nút được định nghĩa bằng $1$ nếu là nút gốc và bằng $1+ $ độ sâu của nút cha với các nút khác. Với cách đánh số trên, các nút lá luôn ở độ sâu $h$ và có số hiệu từ $2^{h-1}$ đến $2^h-1$)
Trong mê cung có duy nhất một nút lá có cửa thoát. Nhiệm vụ của bạn là phải tìm cửa thoát dựa theo thông tin trả về của $q$ lần khảo sát: Thông tin mỗi lần khảo sát có dạng:
    - $1$. Cửa thoát nằm trên lá với tổ tiên ở độ sâu $i$ có số hiệu từ $L$ đến $R$
    **hoặc**
    - $2$. Cửa thoát không nằm trên các lá với tổ tiên ở độ sâu $i$ có số hiệu từ $L$ đến $R$
Hỏi rằng với các thông tin trên có xác định được số hiệu nút lá có cửa thoát hay không?
## Dữ liệu vào:
- Dòng đầu tiên ghi hai số nguyên dương $h,q$ $\left(1≤h≤50,0≤q≤10^5\right)$
- $q$ dòng tiếp theo, mỗi dòng ghi năm số $i,L,R,ans$ $\left(1≤i≤h,2^{i-1}≤L≤R≤2^i-1, ans∈{0,1}\right)$ thể hiện thông tin của một khảo sát với $ans=1$ nếu thuộc dạng $1$ và $ans=0$ nếu thuộc dạng $2$
## Dữ liệu ra:
- Nếu dữ liệu khảo sát mâu thuẫn ghi "No" (không nháy kép)
- Nêu có nhiều lá thỏa mãn thì ghi "Multi" (không có nháy kép)
- Nếu có duy nhất một lá thỏa mãn ghi số hiệu của lá này
## Ví dụ:
<center><img src="/images/problems/1040/exit.png", width=400px></center>
<center><b>Hình minh họa</b></center>

#### Dữ liệu vào:
```
4 3
4 10 14 1
3 6 6 0
2 3 3 1
```

#### Dữ liệu ra:
```
14
```