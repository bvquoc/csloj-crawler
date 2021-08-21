**<center>NGUỒN: TRẠI HÈ HÙNG VƯƠNG LẦN THỨ XIV (PHÚ THỌ 2018)</center>**
<br>

Trong Tin học không có cái gì là vô hạn, mọi thứ đều hữu hạn: bộ nhớ hữu hạn, tốc độ xử lý hữu hạn, kích thước bài toán hữu hạn, ... Trong cuộc sống quanh ta, như A. Einstein đã nhận xét, chỉ có $2$ thứ là không có giới hạn.
Còn trong Toán học thì có vô số thứ vô hạn, ví dụ dãy số nguyên dương $1,2,3,4,…$ là một dãy vô hạn, nhưng một bạn trong lớp đã giơ tay xin có ý kiến: ”Tuy dãy này là vô hạn nhưng mỗi số nguyên dương (số tự nhiên) gặp trong dãy một và chỉ một lần!” Thầy giáo đồng ý với nhận xét đó, viết tiếp lên bảng một dãy số khác và cho biết  đây là một dãy có quy luật, độ dài vô hạn, trong đó mỗi số tự nhiên gặp vô hạn lần:
<center><img src="/images/problems/811/infinity.svg" width=800px></center>

Các phần tử của dãy được đánh số từ $1$ trở đi. Như vậy ở vị trí $3$ là số $2$, ở vị trí $12$ là số $3$, …. Vì đây là một dãy có quy luật nên ta hoàn toàn dễ dàng xác định được số ở vị trí thứ $n$ của dãy.

**Yêu cầu**: Cho $m$ vị trí. Với mỗi vị trí đã cho hãy xác định số ở vị trí đó trong dãy.

## Dữ liệu vào:
- Dòng đầu tiên chứa một số nguyên $m\ (1≤m ≤10^5)$;
- Mỗi dòng trong $m$ dòng sau chứa số nguyên $n$ là vị trí trong dãy $(1≤n≤10^{32})$.
Hai số liên tiếp trên cùng dòng được ghi cách nhau bởi dấu cách.

## Dữ liệu ra:
- Ghi ra các số nguyên tìm được, mỗi số trên một dòng.

## Ví dụ: 
#### Dữ liệu vào:
```
6
5
6
7
8
9
500000
```

#### Dữ liệu ra:
```
1
2
3
2
1
151
```

#### Dữ liệu vào:
```
2
36000000048123456805
36000000048123456806
```

#### Dữ liệu ra:
```
123456789
123456790
```

## Giới hạn:
- Có $20\%$ số test ứng với $20\%$ số điểm có $m\le 50, n \le 1000$;
- Có $20\%$ số test khác ứng với $20\%$ số điểm có $m\le 500, n \le 10^9$;
- Có $20\%$ số test khác ứng với $20\%$ số điểm có $m\le 4\times 10^3, n \le 10^{17}$;
- Có $40\%$ số test còn lại ứng với $40\%$ số điểm có $m\le 10^5, n \le 10^{32}$.