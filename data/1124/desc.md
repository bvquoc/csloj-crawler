<!--
**<center>NGUỒN: Ôn HN tháng 11/2017, Thầy Đỗ Đức Đông, Ngày 2</center>**
-->

Một gameshow truyền hình được ưa thích gần đây như sau: Có ~n~ cửa cần vượt qua, tại mỗi cửa người chơi sẽ nhận được (hoặc mất) một số tiền tương ứng với cửa đó. Tuy nhiên người chơi có thể trả ~k × T~ đồng để bỏ qua ~k~ cửa. Để vượt qua ~n~ của này, người chơi phải bắt đầu từ cửa thứ nhất và kết thúc tại của thứ ~n~ mà trên đường đi của mình không khi nào bị **âm** tiền. Ban đầu người chơi **rỗng túi** (có ~0~ đồng).

**Yêu cầu**: Bạn hãy kiểm tra xem, với một hệ thống các cửa cho trước thì người chơi có thể vượt qua ~n~ của hay không và nếu có thì phải mất ít nhất bao nhiêu bước.

## Dữ liệu vào:
- Dòng đầu ghi hai số nguyên ~n~ và ~T~
- Dòng sau gồm ~n~ số nguyên, số thứ ~i~ là ~a_i~ nghĩa là tại cửa thứ ~i~ người chơi sẽ nhận được ~a_i~ tiền (nếu ~a_i > 0~, sẽ mất ~a_i~ tiền nếu ~a_i < 0~)

## Dữ liệu ra:
- Nếu có thể qua được thì ghi số bước nhỏ nhất, nếu không qua được thì ghi ~-1~

## Giới hạn:
- **Subtask** ~\#1~: ~n ≤ 20, |a_i| ≤ 100~
- **Subtask** ~\#2~: ~n ≤ 100, |a_i| ≤ 100~
- **Subtask** ~\#3~: ~n ≤ 100, |a_i| ≤ 10^9~
- **Subtask** ~\#4~: ~n ≤ 5000, |a_i| ≤ 10^9~

## Ví dụ:
#### Dữ liệu vào:
```
1 100
100
```

#### Dữ liệu ra:
```
1
```

#### Dữ liệu vào:
```
1 100
-20
```

#### Dữ liệu ra:
```
-1
```

#### Dữ liệu vào:
```
4 100
120 20 20 20
```

#### Dữ liệu ra:
```
3
```

#### Dữ liệu vào:
```
6 100
30 30 30 30 30 30
```

#### Dữ liệu ra:
```
5
```
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)