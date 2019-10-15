---
{ 'title': 'shell命令' }
---

## Linux 的启动过程

- BIOS-MBR-BootLoader(grub)-kernel-systemd-系统初始化-shell

```bash
[root@c7~]# dd if=/dev/sda of=mbr.bin bs=446 count=1
[root@c7~]# dd if=/dev/sda of=mbr.bin bs=446 count=1

```

test1
