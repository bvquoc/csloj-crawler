**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 2 - Ôn Hải Phòng T11/2020</center>**

Để chuẩn bị cho kì thế vận hội sắp tới, đất nước nọ quyết định xây dựng ~N~ khu thể thao. Bây giờ bài toán đặt ra là phải tính chi phí xây dựng thế nào.

Tổng thời gian xây dựng là ~K + 1~ ngày đánh số từ ~0~ đến ~K~. Tại ngày ~0~ thì chi phí xây dựng khu thể thao thứ ~j~ là ~a_j~ đồng. Tuy nhiên mỗi ngày qua đi thì chi phí xây dựng lại tăng lên theo cách sau: tại ngày thứ ~i~ thì chi phí xây dựng cho khu thể thao thứ ~j~ sẽ bằng tổng chi phí xây dựng của tất cả các khu thể thao có số thứ tự nhỏ hơn hoặc bằng ~j~ tại ngày thứ ~i – 1~.
~~S_{i,j}=\sum\limits_{m = 1}^j {{S_{i - 1,m}}}~~

Như vậy tổng chi phí xây dựng khu thể thao thứ ~j~ sẽ là giá trị ~S_{K, j}~.

Vấn đề tăng chi phí trong xây dựng tại nước đó chẳng hiếm. Tuy nhiên ban tổ chức nhận ra rằng chi phí còn bị phát sinh thêm nữa bởi phí bôi trơn cho khu thể thao thứ ~j~ vào ngày ~i~ là ~X~ đồng.

~~S_{i,j}=\sum\limits_{m = 1}^j {{S_{i - 1,m}}} +X~~

Do đó tổng chi phí xây dựng cho tất cả các khu thể thao bị tăng lên là ~R~ đồng.

Hãy giúp ban tổ chức tìm chi phí ~X~ nhỏ nhất có thể.

## Dữ liệu vào:
- Dòng đầu tiên cho ~3~ số nguyên ~N, K, R~: số lượng khu thể thao ~(1 ≤ N ≤ 10^5)~, số ngày ~(1 ≤ K ≤ 10^5)~ và chi phí phát sinh ~(1 ≤ R ≤ 10^{18})~;
- Dòng tiếp theo chứa ~N~ số nguyên ~a_i~ - chi phí xây dựng khu thể thao vào ngày ~0\ (1 ≤ a_i ≤ 10^9)~.

## Dữ liệu ra:
- Ghi ra số nguyên duy nhất ~X~ là kết quả bài toán.

## Ví dụ:
#### Dữ liệu vào:
```
3 3 12
1 3 3
```

#### Dữ liệu ra:
```
2
```

## Giới hạn:
- ~30\%~ số điểm có ~N≤10,k≤10,a_i≤10~;
- ~30\%~ số điểm khác có ~N≤1000,k≤1000~.