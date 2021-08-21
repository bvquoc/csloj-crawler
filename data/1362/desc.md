<!--
**<center>Nguồn: Đề CHỌN ĐỘI TUYỂN HSG QUỐC GIA NĂM HỌC 2020 - 2021 - HƯNG YÊN</center>**
-->

Bờm và Cuội vừa học về số dư. Hai bạn say sưa tính toán những phép toán đầu tiên. Sau một hồi, hai bạn nghĩ một trò chơi khác: Bờm viết ra ~n~ số nguyên dương ~a_1,a_2,…,a_n~. Cuội viết ra ~m~ số nguyên dương ~b_1,b_2,…,b_m~. Với mỗi số ~b_i~ Cuội viết ra, Cuội đố Bờm tìm được số dư nhỏ nhất và lớn nhất trong một phép chia của số đó cho một trong các số mà Bờm viết ra. Số lượng phép tính rất nhiều nên Bờm muốn nhờ các bạn lập trình giải giúp yêu cầu trên.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên ~n,m~;
- Dòng thứ hai chứa ~n~ số nguyên ~a_1,a_2,…,a_n\ (a_i≤10^6\  ∀1≤i≤n)~;
- Dòng cuối cùng chứa ~m~ số nguyên ~b_1,b_2,…,b_m\ (b_i≤10^6\  ∀1≤i≤m)~.

## Dữ liệu ra:
- Ghi ra m dòng., dòng thứ ~i~ ghi số dư bé nhất và số dư lớn nhất trong phép chia của số ~b_i~ cho các số trong dãy ~a_1,a_2,…,a_n~.

## Ví dụ:
#### Dữ liệu vào:
```
4 3
2 5 9 7
35 74 13
```

#### Dữ liệu ra:
```
0 8
0 4
1 6
```

## Giới hạn:
- ~30\%~ số test tương ứng ~30\%~ số điểm có ~2≤m,n≤1000;1≤a_i,b_j≤7000~;
- ~30\%~ số test tương ứng ~30\%~ số điểm có ~m,n≤10^5;1≤a_i,b_j≤7000~;
- ~40\%~ số test còn lại tương ứng ~40\%~ số điểm có ~7000≤m,n≤10^5~.