**<center>Nguồn: Đề đề xuất PreVNOI 2013 của Vĩnh Phúc</center>**
<br>

```C++
//Pulp fiction (Chuyện tào lao, đoạn đầu không liên quan gì đến bài toán)
```

Bờm tham gia tổ xây dựng đề thi cho một cuộc thi lập trình trong khu vực. Cuộc thi có sự tham gia của $M$ đội và diễn ra trong $N$ vòng. Các đội được đánh số $1,2,…,M$, đội $i$ có $a_i$ thành viên; các vòng thi được đánh số $1,2,…,N$, đề vòng thi $j$ cần có $b_j$ bài. Bờm phải thiết kế một bài, việc đưa bài đó vào vòng thi nào, phân phối điểm cho bài ra sao sẽ do thầy của Bờm đảm nhiệm.
```C++
//End of Pulp fiction (Hết chuyện tào lao, bắt đầu nội dung bài toán)
```

Ý tưởng của Bờm cho bài thi là về việc sắp xếp không giảm dãy số dựa trên phép đổi chỗ, ràng buộc của phép đổi chỗ là độ tốt của dãy luôn tăng trong quá trình sắp xếp. Giả sử dãy $X=(x_1,x_2,…,x_L)$ có kết quả sắp xếp là dãy $Y=(y_1,y_2,…,y_L)$, độ tốt của $X$ được tính  bằng số chỉ số i thỏa mãn $x_i=y_i$. Phép đổi chỗ hai phần tử của $X$ chỉ được thực hiện nếu nó làm tăng độ tốt của dãy.
**Yêu cầu**: cho dãy $X$, xác định số lượng nhiều nhất phép đổi chỗ có thể thực hiện liên tiếp trên dãy $X$.
Để hoàn thành công việc, Bờm cần thực hiện hai thao tác cuối: viết background và solution cho bài toán. Việc thứ nhất Bờm sẽ nhờ thầy của mình, còn việc thứ hai – Bờm nhờ bạn.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên $L\ (1≤L≤10^5)$
- Dòng sau chứa $L$ số nguyên $x_1,x_2,…,x_L\  (1≤x_i≤10^9\ ∀i)$.

## Dữ liệu ra:
- Một dòng duy nhất chứa số nguyên là số phép đổi chỗ nhiều nhất có thể  thực hiện liên tiếp trên dãy $X$.

## Ví dụ:
#### Dữ liệu vào:
```
4
2 3 2 1
```

#### Dữ liệu ra:
```
3
```

#### Giải thích:
- Dãy cuối cùng là $1, 2, 2, 3$
- Đổi chỗ lần $1$ được dãy $3, 2, 2, 1$
- Đổi chỗ lần $2% được dãy $1, 2, 2, 3$
