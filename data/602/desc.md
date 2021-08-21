**<center>Nguồn: Beginner Free Contest 1</center>**

Trong lớp học của thầy Kiên, Bờm là một học sinh vô cùng xuất sắc. Hôm nay, Bờm lại tiếp tục đứng nhất trong một Contest giữa các trường, vì thế thầy Kiên quyết định sẽ tặng Bờm một ít kẹo xem như phần thưởng.

Thầy Kiên có $n$ viên kẹo được đánh số lần lượt từ $1$ đến $n$. Viên kẹo thứ $i$ có độ ngon $w_i$. Hôm nay, thầy quyết định tặng Bờm $k$ viên kẹo liên tiếp $(1 ≤ k ≤ n)$ trong $n$ viên kẹo. Mặc khác, vì Bờm rất xuất sắc nên thầy Kiên muốn tổng độ ngon của những viên kẹo Bờm nhận được là lớn
nhất. Bạn hãy giúp thầy Kiên tính toán tổng độ ngon của những viên kẹo mà Bờm sẽ nhận được nhé!

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $n$ và $k$ $(k ≤ n ≤ 10^5)$ là số lượng kẹo của thầy Kiên;
- Dòng thứ $i$ trong $n$ dòng tiếp theo chứa duy nhất một số nguyên $w_i$ là độ ngon của viên kẹo thứ $i$ $(1 ≤ w_i ≤ 10^9)$.

## Dữ liệu ra:
- Đưa ra kết quả bài toán trên một dòng.

## Ví dụ:
#### Dữ liệu vào:
```
5 2
4
3
2
6
1
```

## Dữ liệu ra:
```
8
```

#### Giải thích:
- Thầy Kiên cần chọn $2$ viên kẹo liên tiếp sao cho tổng độ ngon là lớn nhất, vì thế thầy sẽ chọn viên kẹo thứ $3$ và viên kẹo thứ $4$.

## Giới hạn:
- $40\%$ số test ứng với $40\%$ số điểm có $k ≤ n ≤ 10000$;
- $60\%$ số test còn lại ứng với $60\%$ số điểm không có giới hạn gì thêm.