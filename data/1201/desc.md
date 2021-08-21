Công ty Alpha hoạt động trong lĩnh vực kinh doanh tài chính. Lúc mới đầu thành lập, công ty có $n$ người làm việc ở $n$ bộ phận khác nhau. Tuy nhiên, qua quá trình làm việc đã nảy sinh rất nhiều bất cập về việc phối hợp giữa các nhân viên. Năng suất công việc giảm dẫn đến khủng hoảng nội bộ trong công ty. Ban giám đốc thường xuyên cần cân nhắc đưa ra các quyết định hợp nhất các phòng ban, bộ phận làm việc nhằm tăng sự phối hợp nhịp nhàng giữa các nhân viên. Có hai loại phương án hợp nhất như sau:
- $1\ u\ v$: Gộp chung hai bộ phận của người $u$ và người $v$ thành một bộ phận. Nếu hai người $u,v$ đã làm chung một bộ phận, coi như không thay đổi gì cả;
- $2\ u\ v$: Gộp chung tất cả các bộ phận có chứa một trong những người $u ,u+1,…,v$ để họ làm chung một bộ phận. $(u≤v)$;

Tại mỗi thời điểm, đôi khi ban giám đốc muốn biết hai người $u,v$ có làm chung bộ phận với nhau hay không?

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương $n,q\ (n,q≤2.10^5)$;
- $q$ dòng tiếp theo mỗi dòng chứa thông tin dạng $t u v$ (với $t=1,2$ tương ứng với phương án quyết định của ban giám đốc) hoặc truy vấn $?\ u\ v$ tương ứng với câu hỏi $u$ và $v$ có làm cùng phòng ban hay không.

## Dữ liệu ra:
- Với mỗi truy vấn $?$ đưa ra câu trả lời `yes/no` tương ứng.

## Ví dụ:
#### Dữ liệu vào:
```
10 8
1 2 6
? 4 6
2 2 4
? 4 6
? 3 5
1 4 8
1 5 8
? 5 6
```

#### Dữ liệu ra:
```
no
yes
no
yes
```

## Giới hạn:
- $50%$ số test có $n,q≤1000$.