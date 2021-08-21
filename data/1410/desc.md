**<center>NGUỒN: Bài tập Bồi dưỡng HSGQG, Hải Phòng, T11/2020, Thái BK</center>**

Một xâu ~S~ độ dài ~n~ chỉ gồm các ký tự trong số ~k~ chữ cái đầu của bảng chữ cái latin thường ~(1 ≤ k ≤ 26)~. Một người đã tiến hành ghi chép các thông tin về xâu này. Mỗi lần, anh ta chọn hai vị trí ~i, j~ và tính ra ký tự ~c~ là ~=, >,
<~ tương ứng là ~S_i = S_j , S_i > S_j , S_i < S_j~.

Cho biết ~m~ thông tin dạng trên, hãy khôi phục lại xâu ~S~;

## Dữ liệu vào:
- Dòng đầu chứa ~n, k, m~;
- ~m~ dòng tiếp theo, mỗi dòng ghi một thông tin ~icj~ (viết liền nhau).
Chỉ số của xâu đánh số từ ~1~, dữ liệu đảm bảo không mâu thuẫn.

## Dữ liệu ra:
- Ghi xâu ~S~. Với các ký tự không thể xác định được, ghi `?`.

## Ví dụ:
#### Dữ liệu vào:
```
4 3 2
1<2
2<3
```

#### Dữ liệu ra:
```
abc?
```

#### Dữ liệu vào:
```
5 3 3
1>2
2>3
5=2
```

#### Dữ liệu ra:
```
cba?b
```

## Giới hạn:
- Subtask ~\#1: 1 ≤ n, m ≤ 1000~;
- Subtask ~\#2: 1 ≤ n, m ≤ 10^5~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)