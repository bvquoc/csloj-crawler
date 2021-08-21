**<center>NGUỒN: VOI Training Camp 3H  (Ngày 01/11/2016 Am)</center>**
<br>

Byteland là một quần đảo có $n$ hòn đảo. Các hòn đảo đánh số từ $1$ đến $n$. Để đơn giản chúng ta hình dung mỗi hòn đảo như là một điểm trên mặt phẳng tọa độ. Giữa một số cặp đảo có những cây cầu nối trực tiếp. Để đơn giản có thể coi độ dài của những cây cầu này bằng khoảng cách giữa hai điểm mô tả hai đảo (chính xác hơn là nó tỷ lệ với khoảng cách này, tuy nhiên ta có thể bỏ qua hệ số tỷ lệ mà không làm thay đổi vấn đề).
Hỏi rằng có tồn tại một đường đi qua tất cả các đảo, mỗi đảo đúng một lần hay không?. Trong trường hợp không tồn tại đường đi như vậy hãy chỉ ra cách bổ sung thêm những cây cầu để thực hiện được điều đó với tổng độ dài những cây cầu cần xây dựng thêm là nhỏ nhất.

## Dữ liệu vào:
- Dòng đầu ghi hai số nguyên dương $n$ và $m$ $\left(n≤20\right)$ là số lượng đảo và $m$ là số lượng cây cầu hiện có
- $n$ dòng tiếp theo, mỗi dòng ghi hai số thực $x_i,y_i$ là tọa độ của một hòn đảo
- $m$ dòng cuối cùng, mỗi dòng ghi hai số nguyên $u,v$   $\left(1≤u,v≤n\right)$ thể hiện một cây cầu hiện có nối đảo $u$ với đảo $v$

## Dữ liệu ra:
- Dòng đầu ghi ```YES``` nếu như tồn tại một hành trình qua tất cả các đảo, mỗi đảo đúng một lần. Trường hợp ngược lại ghi ```NO```.
- Nếu dòng đầu ghi ```NO``` thì dòng thứ hai ghi một số thực với $3$ chữ số phần thập phân thể hiện tổng chiều dài nhỏ nhất của các cây cầu cần xây dựng thêm để tồn tại một hành trình qua tất cả các đảo, mỗi đảo đúng một lần.

## Ví dụ:
<center><img src="/images/problems/1038/bridges.png" width=500px></center>
<center><b>Hình minh họa</b></center>

#### Dữ liệu vào:
```
10 11
3.0 3.0
6.0 3.0
2.0 2.0
4.0 2.0
5.0 2.0
7.0 2.0
1.0 1.0
3.0 1.0
6.0 1.0
8.0 1.0
1 3
1 4
2 5
2 6
3 8
4 8
5 9
6 9
7 8
8 9
9 10
```

#### Dữ liệu ra:
```
NO
1.000
```