**<center>Nguồn: Free Contest 8 (9)</center>**

Thiên là một học sinh chăm chỉ làm bài tập mà cô giáo giao về nhà. Ngoài ra, Thiên cũng có kế hoạch học tập rất khoa học. Thiên tự đặt ra nguyên tắc rằng bạn ấy sẽ làm các bài tập dễ trước rồi mới làm các bài tập khó sau. Sau khi đọc hết $N$ bài tập mà cô giao cho, Thiên đã so sánh được mức độ dễ khó của một vài cặp bài tập, và ghi chú vào trong quyển sổ tay của mình.

Có tổng cộng $M$ dòng trong ghi chú. Bây giờ, Thiên quan tâm đến việc sắp xếp các bài tập sao cho đúng với nguyên tắc của mình.

Chúng ta định nghĩa rằng, thứ tự của một bài tập trong một cách sắp xếp là $i$, nếu bài tập đó được thực hiện sau khi Thiên đã làm hoàn thành $i -1$ bài tập khác.

Việc sắp xếp công việc là đơn giản với Thiên rồi. Thiên có thể tự sắp xếp. Tuy nhiên, có một điều mà Thiên cảm thấy lí thú trong khi sắp xếp là, sẽ có tất cả bao nhiêu cách sắp xếp để làm hết $N$ bài tập, dựa trên nguyên tắc và những gì mà Thiên đã ghi chú?

Thiên rất tò mò về điều này, nhưng hiện Thiên đang bận làm bài tập nên Thiên nhờ các bạn trẻ trong cuộc thi Free Contest $8$ giải giúp!

## Dữ liệu vào:
- Dòng đầu tiên gồm hai số nguyên dương $N$ và $M$ lần lượt là số lượng bài tập Thiên bị giao và số dòng trong ghi chú.
- $M$ dòng tiếp theo, mỗi dòng chứa hai số $u$ và $v$, cho biết rằng bài tập $u$ dễ hơn bài tập $v$, nói cách khác, bài tập $u$ cần được làm trước bài tập $v$.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là tổng số cách làm bài tập.

**Lưu ý:**
- Hai cách làm được xem là khác nhau khi và chỉ khi tồn tại một bài tập nào đó mà thứ tự của bài tập này ở cách $1$ và cách $2$ là khác nhau.
- Dữ liệu vào của bài toán luôn đảm bảo sẽ có lời giải.

## Ví dụ:
#### Dữ liệu vào:
```
5 7
1 2
1 3
1 4
1 5
2 4
2 5
3 5
```

#### Dữ liệu ra:
```
5
```

#### Giải thích:
$5$ cách sắp xếp bài tập mà Thiên có thể làm là:
- $1 2 3 4 5$
- $1 3 2 4 5$
- $1 2 4 3 5$
- $1 2 3 5 4$
- $1 3 2 5 4$

Dễ thấy rằng $5$ cách trên thỏa mãn: bài tập $1$ làm trước bài tập $2$, bài tập $1$ làm trước bài tập $3$, bài tập $1$ làm trước bài tập $4$, bài tập $1$ làm trước bài tập $5$, bài tập $2$ làm trước bài tập $4$, bài tập $2$ làm trước bài tập $5$, bài tập $3$ làm trước bài tập $5$.

## Giới hạn:
- $N ≤ 20; M ≤ \frac{N(N-1)}{2}$