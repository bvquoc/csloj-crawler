**<center>Nguồn:  Free Contest 02</center>**

Trang trại của nông dân John vừa mới nhận được một lượng công việc khổng lồ! Có thể tưởng tượng rằng, ngày làm việc của John bắt đầu từ thời điểm $0$ và kết thúc tại thời điểm $10^9$, được chia thành từng đơn vị thời gian. $N$ công việc đã được gửi đến, công việc thứ $k$ có hạn chót là $S_k$ và nếu hoàn thành công việc đúng hạn, John sẽ được khoản tiền là $P_k$. Mỗi công việc cần đúng $1$ đơn vị thời gian để hoàn thành, và John phải làm liên tục trong $1$ đơn vị đó từ đầu đến cuối.

Do lượng công việc quá lớn, nên anh có thể bỏ qua một số công việc nào đó. Hãy giúp John lựa chọn các công việc sao cho tổng lợi nhuận thu về là nhiều nhất.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên $N\ (1 ≤ N ≤ 10^5)$ là số lượng công việc;
- $N$ dòng sau, mỗi dòng chứa hai số nguyên $S_k$ và $P_k$ $(1 ≤ S_k, P_k ≤ 10^9)$ mô tả hạn chót và lợi nhuận thu được nếu hoàn thành công việc này đúng hạn (không quá thời điểm $S_k$).

## Dữ liệu ra:
- In ra lợi nhuận tối ưu có thể thu được.

## Ví dụ:
#### Dữ liệu vào:
```
3
2 10
1 5
1 7
```

#### Dữ liệu ra:
```
17
```

#### Giải thích:
- John không thể hoàn thành được cả $3$ công việc, nên anh sẽ chọn làm công việc $3$ rồi đến công việc $1$. Tổng lợi nhuận sẽ là $7 + 10 = 17$.