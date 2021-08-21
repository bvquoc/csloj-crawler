**<center>ĐỀ KIỂM TRA ĐỘI TUYỂN HSG LẦN 2 - Ôn Hải Phòng T11/2020</center>**

Cho dãy ~A~ là hoán vị của ~n~ phần tử ~(1≤A[i]≤n;A[i]≠A[j])~.

Hãy đếm số hoán vị ~B~ sao cho ~A[B[x]]=B[A[x]], ∀x=1..n~ theo modul ~10^9+7~.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~n~.
- Dòng thứ hai chứa ~n~ số nguyên dương ~A[1], A[2], \dots, A[n]~.

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất kết quả bài toán.

## Ví dụ:
#### Dữ liệu vào:
```
5
3 1 2 5 4
```

#### Dữ liệu ra:
```
6
```

#### Giải thích:
- ~A[1] = 3; A[2] = 1; A[3] = 2; A[4] = 5; A[5] = 4~;

Một số kết quả của B:
~B[1] = 1; B[2] = 2; B[3] = 3; B[4] = 5; B[5] = 4~;

Khi đó:

- ~A[B[1]]= B[A[1]]= 3~;
- ~A[B[2]]= B[A[2]]= 1~;
- ~A[B[3]]= B[A[3]]= 2~;
- ~A[B[4]]= B[A[4]]= 4~;
- ~A[B[5]]= B[A[5]]=5~.

~B[1] = 2; B[2] = 3; B[3] = 1; B[4] = 4; B[5] = 5~

Khi đó:
- ~A[B[1]]= B[A[1]]= 1~;
- ~A[B[2]]= B[A[2]]= 2~;
- ~A[B[3]]= B[A[3]]= 3~;
- ~A[B[4]]= B[A[4]]= 4~;
- ~A[B[5]] = B[A[5]] = 5~.

## Giới hạn:
- ~10\%~ số điểm có ~1≤n≤9~;
- ~34\%~ số điểm khác có ~1≤n≤100~, kết quả ≤~10^6~;
- ~56\%~ số điểm còn lại có ~n≤10^6~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)