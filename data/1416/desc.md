**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 3 - Ôn Hải Phòng T11/2020</center>**

Trong cuộc bầu cử tổng thống Mỹ còn lại 2 ứng viên: bố già Sam và bố già Frodo. Bạn làm việc trong đội của bố già Sam và cần giúp cho bố thắng cử.

Theo nguyên tắc để thắng cử thì bố già Sam cần phải có nhiều hơn ~50\%~ số phiếu. Nhưng trên thực tế thì cần ít hơn nhiều. Như thế này nhé:

Như ta đã biết thì Mỹ chia ra làm các tiểu bang. Lúc bắt đầu ở các tiểu bang sẽ tổ chức các cuộc bầu cử địa phương, rồi lấy kết quả để tiểu bang bỏ ~1~ phiếu bầu cho ~1~ trong ~2~ ứng viên. Nếu như **không ít hơn một nửa** số tiểu bang bầu cho bố già Sam thì bố thắng (nếu số phiếu bằng nhau thì bố vẫn thắng), còn không thì bố già Frodo thắng. Mỗi tiểu bang lại được chia thành các vùng khác nhau, rồi các vùng lại chia thành các vùng nhỏ hơn, và cứ thế chia tiếp. Vùng nhỏ nhất chính là các vùng chỉ chứa ~1~ cư dân Mỹ. Ở Mỹ chỉ có ~N~ người dân và ~K~ bậc theo cách chia vùng. Theo nguyên tắc công bằng thì tất cả vùng bậc ~i~ cũng phải chia ra làm các vùng bậc tiếp theo ~i+1~ với số lượng bằng nhau (và có dân số bằng nhau).

Kì diệu ở chỗ là việc chia vùng lại phụ thuộc vào bạn, tức là vùng bậc ~i~ chia thành bao nhiêu vùng bậc ~i+1~ nằm trong tay bạn.

Ngoài ra bạn có thể thao túng kết quả bầu cử thông qua dầu mỏ. Để mua ~1~ phiếu cho bố già Sam từ ~1~ cử tri thì chỉ cần trả cho anh ta ~1~ thùng dầu.

Nhưng tệ ở một chỗ là từ đầu cả nước lại muốn bầu cho bố già Frodo. Hãy tính chi phí ít nhất để mua chuộc cử tri cho bố già Sam.

## Dữ liệu vào:
- Một dòng duy nhất chứa hai số nguyên ~N~ và ~K\ (1 ≤ N ≤ 10^{15}, 1 ≤ K ≤10)~.

## Dữ liệu ra:
- Ghi ra một số duy nhất là chi phí nhỏ nhất để mua chuộc kết quả.

## Ví dụ:
<center><img src="/images/problems/1416/GREEN1.png" width="400px" /></center>

#### Dữ liệu vào:
```
9 2
```

#### Dữ liệu ra:
```
4
```

<center><img src="/images/problems/1416/GREEN2.png" width="400px" /></center>

#### Dữ liệu vào:
```
12 3
```

#### Dữ liệu ra:
```
2
```

## Giới hạn:
- Subtask ~\#1: 20\%~ số điểm có ~N\le 1000, K \le 2~:
- Subtask ~\#2: 20\%~ số điểm khác có ~N \le 1000~;
- Subtask ~\#3: 20\%~ số điểm khác có ~N \le 10^6~;
- Subtask ~\#4: 40\%~ số điểm còn lại không có ràng buộc bổ sung.