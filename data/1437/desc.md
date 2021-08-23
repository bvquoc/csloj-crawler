**<center>NGUỒN: Bài tập thầy Bình ôn Bắc Giang</center>**

Những con bò của nông dân John (FJ) đứng xếp thành một hàng để biểu tình. Các con bò được đánh số từ $1$ đến $N$ theo thứ tự và con bò thứ $i$ giơ một tấm bảng ghi một số nguyên $A_i$ thể hiện mức độ ủng hộ với FJ (số càng lớn thì mức độ ủng hộ càng cao, số âm thể hiện sự phản đối của con bò đối với các chính sách của FJ). Mức độ ủng hộ của một nhóm các con bò liên tiếp được đo bằng tổng mức độ ủng hộ của từng con bò trong nhóm.

Để ngăn chặn sự chống đối, FJ muốn lập chia các con bò đang đứng thành từng nhóm gồm các con bò liên tục sao cho mức độ ủng hộ trong mỗi nhóm đều là số không âm.

Hãy tính xem có bao nhiêu cách khác nhau để FJ có thể làm như vậy.

Ví dụ, với $N=4$ và các con bò có mức độ ủng hộ lần lượt là $2, 3, -3$ và $1$ thì khi đó FJ có thể có $4$ cách chia như sau:
- $(2,3,-3,1)$;
- $(2,3,-3),(1)$;
- $(2), (3,-3,1)$;
- $(2),(3,-3),(1)$.

## Dữ liệu vào:
- Dòng đầu ghi số nguyên dương $N\ (1≤N≤10^5)$;
- $N$ dòng tiếp theo, dòng thứ $i$ ghi $A_i\ (|A_i| \le 10000)$.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là kết quả thu được là phần dư sau khi chia cho $10^9+9$.

## Ví dụ:
### Dữ liệu vào:
```
4
2
3
-3
1
```

### Dữ liệu ra:
```
4
```