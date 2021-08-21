**<center>NGUỒN: VOI 2017 - 2018</center>**
**<center>Test không chính thức (thầy Hồ Đắc Phương)</center>**

Vinh rất thích các bài toán liên quan đến dãy số. Vừa qua thầy dạy giải tích đã giao cho Vinh giải quyết bài toán sau đây:

Cho dãy số nguyên ~A = <a_1, a_2, …, a_N>~, cần xây dựng dãy số nguyên~B = <b_1, b_2, …, b_N>~ thỏa mãn các điều kiện sau:

1. Dãy ~B~ là đơn điệu tăng, nghĩa là ~b_1 < b_2<\dots <b_N~;
2. Độ chênh lệch ~d(A, B~) giữa hai dãy ~A~ và ~B~ được tính theo công thức ~d(A,B)=|a_1-b_1|+|a-2-b_2|+…+|a_N-b_n|~ là nhỏ nhất.

Dãy ~B~ thỏa mãn các điều kiện nêu trên được gọi là ***dãy đơn điệu tăng xấp xỉ tốt nhất*** của dãy số ~A~.

**Yêu cầu:** Hãy giúp Vinh tìm dãy số ~B~ thỏa mãn các yêu cầu đặt ra.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương ~N~;
- Dòng thứ hai chứa ~N~ số nguyên ~a_1, a_2, …, a_N~, hai số liên tiếp được ghi cách nhau bởi dấu cách, là các số hạng của dãy số ~A~ đã cho.

## Dữ liệu ra:
- Dòng đầu tiên chứa một số nguyên là độ chênh lệch giữa dãy số tìm được với dãy đã cho;
- Dòng thứ hai chứa ~N~ số nguyên ~b_1, b_2, \dots, b_N~, hai số liên tiếp được ghi cách nhau bởi dấu cách, là các số hạng của dãy tìm được. Nếu có nhiều dãy cùng thỏa mãn các điều kiện đặt ra, hãy đưa ra một dãy tùy ý trong số chúng.

## Giới hạn:
- Có ~20\%~ số test ứng với ~20\%~ số điểm của bài thỏa mãn điều kiện: ~N=3;0≤a_i≤10^9,i= 1,2,…,N~;
- Có ~20\%~ số test khác ứng với ~20\%~ số điểm của bài thỏa mãn điều kiện: ~N≤300; 0≤a_i≤300,i=1,2,..., N~;
- Có ~20\%~ số test khác ứng với ~20\%~ số điểm của bài thỏa mãn điều kiện: ~N≤300; 0≤a_i≤10^9, i= 1,2, …, N~;
- Có ~20\%~ số test khác ứng với ~20\%~ số điểm của bài thỏa mãn điều kiện: ~N≤3000; 0≤ a_i≤10^9, i= 1,2, …,N~;
- Có ~20\%~ số test còn lại ứng với ~20\%~ số điểm của bài thỏa mãn điều kiện: ~N≤300000; 0 ≤a_i≤10^9, i= 1,2, …, N~.

Đối với mỗi test, ~50\%~ số điểm của test dành cho việc đưa ra giá trị độ chênh lệch nhỏ nhất và ~50\%~ số điểm còn lại dành cho việc đưa ra dãy đơn điệu tăng xấp xỉ tốt nhất dãy đã cho.

## Ví dụ:
#### Dữ liệu vào:
```
7
1 5 1 7 3 1 3
```

#### Dữ liệu ra:
```
17
-1 0 1 2 3 4 5
```